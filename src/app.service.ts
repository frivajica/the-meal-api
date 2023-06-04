import { Injectable, OnModuleInit } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

import { GlobalService } from "./global.service";
import { generatePrice } from "./utils/prices";
import { Category } from "./interfaces/categories";
import { FetchedMeal } from "./interfaces/meals";

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly globalService: GlobalService,
    private readonly httpService: HttpService
  ) {}

  // Save all categories and meals on startup.
  async onModuleInit() {
    try {
      // Fetch and save all categories.
      const { data } = await firstValueFrom(
        this.httpService.get(`${process.env.API_URL}/categories.php`)
      );
      this.globalService.setCategories(data.categories);

      // Fetch all meals for every category.
      const meals = await Promise.all(
        data.categories.map(async ({ strCategory }: Category) => {
          const { meals } = await this.fetchSpecificCategory(strCategory);
          const withPrice = meals.map((meal: FetchedMeal) => ({
            ...meal,
            price: generatePrice(strCategory),
          }));
          return { category: strCategory, data: withPrice };
        })
      );

      // Set the category name as object key and data as value.
      const mealsObject = meals.reduce((acc, meal) => {
        return { ...acc, [meal.category]: meal.data };
      }, {});

      // Save the meals.
      this.globalService.setMeals(mealsObject);
    } catch (error) {
      console.error(error);
    }
  }

  async fetchSpecificCategory(category: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(`${process.env.API_URL}/filter.php?c=${category}`)
    );
    return data;
  }

  getHello(): string {
    return "Hello World!";
  }
}

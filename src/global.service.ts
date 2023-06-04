import { Injectable } from "@nestjs/common";
import { writeFileSync, readFileSync } from "fs";

import { Category } from "./interfaces/categories";
import { Meal } from "./interfaces/meals";

@Injectable()
export class GlobalService {
  setCategories(data: Category[]) {
    if (!data) return;
    writeFileSync("categories.json", JSON.stringify(data, null, 2));
  }

  getCategories(): Category[] {
    const categories = readFileSync("categories.json", "utf8");
    return JSON.parse(categories);
  }

  setMeals(data: Record<string, Meal[]>) {
    writeFileSync("meals.json", JSON.stringify(data, null, 2));
  }

  getMeals(category: string | undefined): Record<string, Meal[]> {
    const meals = readFileSync("meals.json", "utf8");
    const allMeals = JSON.parse(meals);
    if (!category) return allMeals;
    return allMeals[category];
  }
}

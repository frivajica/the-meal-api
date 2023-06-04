import { Injectable } from "@nestjs/common";

import { Meal } from "src/interfaces/meals";
import { GlobalService } from "../global.service";

@Injectable()
export class MealsService {
  constructor(private readonly globalService: GlobalService) {}

  getMeals(category): Record<string, Meal[]> {
    return this.globalService.getMeals(category);
  }
}

import { Controller, Get, Query } from '@nestjs/common';

import { Meal } from 'src/interfaces/meals';
import { MealsService } from './meals.service';

@Controller('meals')
export class MealsController {
  constructor(private readonly mealsService: MealsService) {}

  @Get()
  getMeals(@Query() { category }): Record<string, Meal[]> {
    return this.mealsService.getMeals(category);
  }
}

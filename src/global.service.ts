import { Injectable } from '@nestjs/common';
import { writeFileSync, readFileSync } from 'fs';

import { Category } from './interfaces/categories';

@Injectable()
export class GlobalService {
  private categories: Category[];
  private meals: any;

  setCategories(data: Category[]) {
    if (!data) return;
    writeFileSync('categories.json', JSON.stringify(data, null, 2));
  }

  getCategories(): Category[] {
    const categories = readFileSync('categories.json', 'utf8');
    return JSON.parse(categories);
  }

  setMeals(data: any) {
    this.meals = data;
  }

  getMeals(): any {
    return this.meals;
  }
}

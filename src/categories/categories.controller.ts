import { Controller, Get } from '@nestjs/common';

import { Category } from 'src/interfaces/categories';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getCategories(): Category[] {
    return this.categoriesService.getCategories();
  }
}

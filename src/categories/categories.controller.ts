import { Controller, Get } from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { Categories } from './categories.interface';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getCategories(): Promise<Categories> {
    return this.categoriesService.getCategories();
  }
}

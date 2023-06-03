import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

import type { Categories } from './categories.interface';

@Injectable()
export class CategoriesService {
  constructor(private readonly httpService: HttpService) {}

  async getCategories(): Promise<Categories> {
    const { data } = await firstValueFrom(
      this.httpService.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php',
      ),
    );

    return data.categories;
  }
}

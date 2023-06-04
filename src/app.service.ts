import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

import { GlobalService } from './global.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly globalService: GlobalService,
    private readonly httpService: HttpService,
  ) {}

  async onModuleInit() {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(
          'https://www.themealdb.com/api/json/v1/1/categories.php',
        ),
      );
      this.globalService.setCategories(data.categories);
    } catch (error) {
      console.error(error);
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}

// startup.service.ts

import { Injectable, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { GlobalService } from './global.service';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class StartupService implements OnModuleInit {
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
}

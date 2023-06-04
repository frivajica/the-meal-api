import { Module } from '@nestjs/common';

import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { GlobalService } from 'src/global.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, GlobalService],
})
export class CategoriesModule {}

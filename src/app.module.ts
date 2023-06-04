import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule } from "@nestjs/config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CategoriesModule } from "./categories/categories.module";
import { GlobalService } from "./global.service";
import { MealsModule } from "./meals/meals.module";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CategoriesModule, MealsModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, GlobalService],
})
export class AppModule {}

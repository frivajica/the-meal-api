import { Module } from "@nestjs/common";

import { MealsService } from "./meals.service";
import { MealsController } from "./meals.controller";
import { GlobalService } from "../global.service";

@Module({
  controllers: [MealsController],
  providers: [MealsService, GlobalService],
})
export class MealsModule {}

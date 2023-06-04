import { Test, TestingModule } from "@nestjs/testing";

import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";
import { GlobalService } from "../global.service";

describe("CategoriesController", () => {
  let controller: CategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService, GlobalService],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return an array of categories", async () => {
    const categories = await controller.getCategories();
    expect(Array.isArray(categories)).toBe(true);
  });
});

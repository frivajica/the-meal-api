import { Test, TestingModule } from "@nestjs/testing";
import { MealsController } from "./meals.controller";
import { MealsService } from "./meals.service";
import { GlobalService } from "../global.service";

describe("MealsController", () => {
  let controller: MealsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MealsController],
      providers: [MealsService, GlobalService],
    }).compile();

    controller = module.get<MealsController>(MealsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  it("should return an object of categories", async () => {
    const categories = await controller.getMeals({ category: undefined });
    const isObject =
      typeof categories === "object" && !Array.isArray(categories) && categories !== null;
    expect(isObject).toBe(true);
    expect(Object.entries(categories).length).toBeGreaterThan(0);
  });

  it("should return an array of meals for a specific category", async () => {
    const meals = await controller.getMeals({ category: "Beef" });
    expect(Array.isArray(meals)).toBe(true);
    expect(meals.length).toBeGreaterThan(0);
  });
});

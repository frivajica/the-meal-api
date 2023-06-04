import { Test, TestingModule } from "@nestjs/testing";
import { MealsService } from "./meals.service";
import { GlobalService } from "../global.service";

describe("MealsService", () => {
  let service: MealsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MealsService, GlobalService],
    }).compile();

    service = module.get<MealsService>(MealsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should return an object of categories", async () => {
    const categories = await service.getMeals(undefined);
    const isObject =
      typeof categories === "object" && !Array.isArray(categories) && categories !== null;
    expect(isObject).toBe(true);
    expect(Object.entries(categories).length).toBeGreaterThan(0);
  });

  it("should return an array of meals for a specific category", async () => {
    const meals = await service.getMeals("Beef");
    expect(Array.isArray(meals)).toBe(true);
    expect(meals.length).toBeGreaterThan(0);
  });
});

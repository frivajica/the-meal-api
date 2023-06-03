import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { HttpModule } from '@nestjs/axios';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [CategoriesService],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of categories', async () => {
    const categories = await service.getCategories();
    expect(Array.isArray(categories)).toBe(true);
  });
});

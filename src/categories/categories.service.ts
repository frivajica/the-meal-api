import { Injectable } from "@nestjs/common";
import { GlobalService } from "../global.service";
import { Category } from "src/interfaces/categories";

@Injectable()
export class CategoriesService {
  constructor(private readonly globalService: GlobalService) {}

  getCategories(): Category[] {
    return this.globalService.getCategories();
  }
}

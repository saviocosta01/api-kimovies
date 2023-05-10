import { Repository } from "typeorm";
import {
  TCategories,
  TCategoriesRequest,
} from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { categorySchema } from "../../schemas/categories.schema";

export const createCategoriesService = async (
  data: TCategoriesRequest
): Promise<TCategories> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category = categoryRepository.create(data);

  await categoryRepository.save(category);

  const returnCategory: TCategories = categorySchema.parse(category);

  return returnCategory;
};

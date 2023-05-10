import { Repository } from "typeorm";
import { TListCategories } from "../../interfaces/categories.interfaces";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { listCategorySchema } from "../../schemas/categories.schema";

export const listCategoryService = async (): Promise<TListCategories> => {
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories: Category[] = await categoryRepository.find();

  const returnCategories: TListCategories =
    listCategorySchema.parse(categories);

  return returnCategories;
};

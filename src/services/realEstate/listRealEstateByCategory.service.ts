import { Repository } from "typeorm";
import { Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TListRealEstates } from "../../interfaces/realEstate.interfaces";

export const listRealEstateByCategoryService = async (
  id: number
): Promise<TListRealEstates> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);
  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category | null | any= await categoryRepository.findOne({
    where: {
      id: id,
    },
    relations: {
        realEstate: true
    }
  });
  await categoryRepository.save(category)

 return category
};

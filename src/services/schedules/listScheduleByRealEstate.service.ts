import { Repository } from "typeorm";
import { RealEstate, Schedule } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TListSchedulesByRealEstate } from "../../interfaces/schedules.interfaces";

export const listScheduleByRealEstateService = async (
  id: number
): Promise<TListSchedulesByRealEstate> => {
  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findRealEstate: RealEstate | null | any =
    await realEstateRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        schedules: {
          user: true,
        },
        address: true,
        category: true,
      },
    });

  await realEstateRepository.save(findRealEstate);

  return findRealEstate;
};

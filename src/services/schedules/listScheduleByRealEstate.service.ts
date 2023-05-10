import { Repository } from "typeorm"
import { RealEstate, Schedule } from "../../entities"
import { AppDataSource } from "../../data-source"
import { TListSchedulesByRealEstate } from "../../interfaces/schedules.interfaces"



export const listScheduleByRealEstateService = async(id: number): Promise<TListSchedulesByRealEstate> => {
    const schedulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const findRealEstate: RealEstate | null | any = await realEstateRepository.find({
        where: {
            id: id
        },
        relations:{
            address: true,
            category: true
        }
    })

    const schedule: Schedule | null | any = await schedulesRepository.find({
        where: {
            realEstate: findRealEstate
        },
        relations: {
            user: true
        }
    })
    await schedulesRepository.save(schedule)

    return schedule
}
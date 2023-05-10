import { Repository } from "typeorm"
import { RealEstate, Schedule, User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { TCreateSchedules, TCreateSchedulesRequest } from "../../interfaces/schedules.interfaces"



export const createSchedulesService = async(data: TCreateSchedulesRequest | any, userId: number): Promise<TCreateSchedules> => {
    
    const schedulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    
    const realEstate: RealEstate | null= await realEstateRepository.findOneBy({
        id: data.realEstateId
    })
    
    const user: User | null = await userRepository.findOneBy({
        id: userId
    })

    delete data.realEstateId

    const createSchedules: Schedule | any = await schedulesRepository.create({
        ...data,
        realEstate: realEstate,
        user: user
    })
    await schedulesRepository.save(createSchedules)

    return createSchedules
}
import { Repository } from "typeorm"
import { Schedule } from "../../entities"
import { AppDataSource } from "../../data-source"
import { NextFunction, Request, Response } from "express"
import { AppError } from "../../errors"



export const ensureDateAndHourExistsMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const {date, hour} = req.body
    const schedulesRepository: Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const schedule: Schedule | null = await schedulesRepository.createQueryBuilder("schedules")
    .where("schedules.date = :date", {date})
    .andWhere("schedules.hour = :hour", {hour})
    .getOne()

    if(schedule){
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    return next()
}
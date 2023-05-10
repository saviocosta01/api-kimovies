import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";



export const queryBuilderMiddleware = async(req: Request, res: Response, next: NextFunction):Promise<Response | void> => {

    const userId: number =Number(res.locals.id)
    const {date, hour} = req.body

    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null | any = await userRepository.createQueryBuilder('users')
    .innerJoinAndSelect('users.schedules', 'schedules')
    .where("users.id = :userId", {userId})
    .andWhere("schedules.date = :date", {date})
    .andWhere("schedules.hour = :hour", {hour})
    .getOne()

    if(user){
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }
    return next()
}
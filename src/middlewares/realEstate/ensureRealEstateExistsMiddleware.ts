import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";


export const ensureRealEstateMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void>  => {

    const realEstateId: number = Number(req.body.realEstateId)
    
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstate: RealEstate | null = await realEstateRepository.findOneBy({
        id: realEstateId
    })

    if(!realEstate){
        throw new AppError("RealEstate not found", 404)
    }

    return next()
}
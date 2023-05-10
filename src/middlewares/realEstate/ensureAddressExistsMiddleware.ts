import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Address } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";


export const ensureAddressExistsMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const streetAddress = req.body.address.street
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)

    const address: Address | null = await addressRepository.findOne({
        where: {
            street: streetAddress
        }
    })
    
    if(address){
        throw new AppError("Address already exists", 409)
    }

    return next()
}
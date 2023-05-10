import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";


export const notAdminUserMiddleware = async(req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    const userId = Number(res.locals.id)
    const admin = res.locals.admin
    const id = Number(req.params.id)

    if(admin == false){
        if(userId == id){
            return next()
        }
        throw new AppError("Insufficient permission", 403)
        
    }
    return next()
}
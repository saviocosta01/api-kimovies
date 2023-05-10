import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";


export const checkHoursMiddleware = async(req: Request, res: Response, next: NextFunction ): Promise<Response | void> => {

    const {hour, date} = req.body

    const newDate = `${date} ${hour}`

    const t = new Date(newDate);
    let time = Number(t.getHours())

    const d = new Date(newDate)
    const day = Number(d.getDay())
  

    if(time < 8  || time > 18){
        throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
    }

    if(day == 6 || day == 0){
        throw new AppError("Invalid date, work days are monday to friday", 400)
    }
    
    return next()
}
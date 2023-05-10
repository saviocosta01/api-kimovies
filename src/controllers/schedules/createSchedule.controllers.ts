import { Request, Response } from "express";
import { createSchedulesService } from "../../services/schedules/createSchedules.service";
import { TCreateSchedulesRequest } from "../../interfaces/schedules.interfaces";



export const createSchedulesControllers = async(req: Request, res: Response): Promise<Response> => {

    const data: TCreateSchedulesRequest = req.body

    const userId: number = Number(res.locals.id)

    const newSchedule = await createSchedulesService(data, userId)

    return res.status(201).json({message: "Schedule created"})
}
import { Request, Response } from "express";
import { listScheduleByRealEstateService } from "../../services/schedules/listScheduleByRealEstate.service";
import { TListSchedulesByRealEstate } from "../../interfaces/schedules.interfaces";

export const listScheduleByRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);

  const listSchedules: TListSchedulesByRealEstate = await listScheduleByRealEstateService(id)

  return res.json(listSchedules);
};

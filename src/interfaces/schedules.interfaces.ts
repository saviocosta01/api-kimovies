import { z } from "zod";
import { createScheduleSchema, createScheduleSchemaRequest, listScheduleSchema } from "../schemas/schedules.schema";



export type TCreateSchedules = z.infer<typeof createScheduleSchema>

export type TCreateSchedulesRequest = z.infer<typeof createScheduleSchemaRequest>

export type TListSchedulesByRealEstate = z.infer<typeof listScheduleSchema>
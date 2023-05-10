import { z } from "zod";
import { realEstateSchema } from "./realEstate.schema";
import { userSchema, userSchemaResponse } from "./users.schemas";


export const createScheduleSchema = z.object({
    id: z.string(),
    date: z.string(),
    hour: z.string(),
    realEstate: realEstateSchema,
    user: userSchemaResponse
})

export const createScheduleSchemaRequest = z.object({
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().int(),
})

export const listSchedulesByRealEstateSchema = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string()
})

export const listScheduleSchema = z.array(listSchedulesByRealEstateSchema)
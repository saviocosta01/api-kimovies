import { Router } from "express";
import { createSchedulesControllers } from "../controllers/schedules/createSchedule.controllers";
import { tokenValidated } from "../middlewares/tokenValidatedMiddleware";
import { ensureRealEstateMiddleware } from "../middlewares/realEstate/ensureRealEstateExistsMiddleware";
import { validateBodyMiddleware } from "../middlewares/validateBodyMiddleware";
import { createScheduleSchemaRequest } from "../schemas/schedules.schema";
import { queryBuilderMiddleware } from "../middlewares/schedules/userSchedulesMiddleware";
import { ensureDateAndHourExistsMiddleware } from "../middlewares/schedules/ensureDateAndHourExistsMiddleware";
import { checkHoursMiddleware } from "../middlewares/schedules/checkHoursMiddleware";
import { listScheduleByRealEstate } from "../controllers/schedules/listScheduleByRealEstate.controllers";
import { validatedAdminMiddleware } from "../middlewares/adminValidatedMiddleware";
import { ensureRealEstateExistsMiddleware } from "../middlewares/schedules/ensureRealEstateExistsMiddleware";



export const scheduleRoutes: Router = Router()

scheduleRoutes.post("",tokenValidated, validateBodyMiddleware(createScheduleSchemaRequest), ensureRealEstateMiddleware, queryBuilderMiddleware,ensureDateAndHourExistsMiddleware, checkHoursMiddleware, createSchedulesControllers)
scheduleRoutes.get("/realEstate/:id",tokenValidated, validatedAdminMiddleware, ensureRealEstateExistsMiddleware, listScheduleByRealEstate)
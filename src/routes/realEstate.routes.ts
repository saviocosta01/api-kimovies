import { Router } from "express";
import { createRealEstateControllers } from "../controllers/realEstate/createRealEstate.controllers";
import { validateBodyMiddleware } from "../middlewares/validateBodyMiddleware";
import { createRealEstateSchemaRequest } from "../schemas/realEstate.schema";
import { listRealEstatesControllers } from "../controllers/realEstate/listRealEstates.controllers";
import { tokenValidated } from "../middlewares/tokenValidatedMiddleware";
import { validatedAdminMiddleware } from "../middlewares/adminValidatedMiddleware";
import { ensureAddressExistsMiddleware } from "../middlewares/realEstate/ensureAddressExistsMiddleware";
 



export const realEstateRoutes: Router = Router()

realEstateRoutes.post("", tokenValidated, validateBodyMiddleware(createRealEstateSchemaRequest), validatedAdminMiddleware, ensureAddressExistsMiddleware, createRealEstateControllers)
realEstateRoutes.get("", listRealEstatesControllers)

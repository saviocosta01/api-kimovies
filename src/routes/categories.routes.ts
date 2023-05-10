import { Router } from "express";
import { createCategoriesControllers } from "../controllers/categories/createCategories.controllers";
import { validateBodyMiddleware } from "../middlewares/validateBodyMiddleware";
import { categorySchemaRequest } from "../schemas/categories.schema";
import { ensureNameExistsMiddleware } from "../middlewares/categories/ensureNameExistsMiddleware";
import { validatedAdminMiddleware } from "../middlewares/adminValidatedMiddleware";
import { tokenValidated } from "../middlewares/tokenValidatedMiddleware";
import { listCategoriesControllers } from "../controllers/categories/listCategories.controllers";
import { listRealEstateByCategoryControllers } from "../controllers/realEstate/listRealEstateByCategory.controllers";
import { ensureCategoryExistsMiddleware } from "../middlewares/categories/ensureCategoryExistsMiddleware";

export const categoryRoutes: Router = Router()

categoryRoutes.post("",validateBodyMiddleware(categorySchemaRequest),tokenValidated, ensureNameExistsMiddleware,validatedAdminMiddleware, createCategoriesControllers)
categoryRoutes.get("", listCategoriesControllers)
categoryRoutes.get("/:id/realEstate", ensureCategoryExistsMiddleware, listRealEstateByCategoryControllers)
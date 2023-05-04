import { Request, Response, Router } from "express";
import { createUsersControllers } from "../controllers/users/createUsers.controllers";
import { ensureEmailExistsMiddleware } from "../middlewares/ensureEmailExistsMiddleware";
import { listUsersControllers } from "../controllers/users/listUsers.controllers";


export const userRoutes: Router = Router()

userRoutes.post("",  ensureEmailExistsMiddleware, createUsersControllers)
userRoutes.get("", listUsersControllers)

import { Router } from "express";
import { loginUsersControllers } from "../controllers/users/loginUsers.controllers";
import { validateBodyMiddleware } from "../middlewares/validateBodyMiddleware";
import { loginUserSchema } from "../schemas/users.schemas";


export const loginUserRoutes: Router = Router()


loginUserRoutes.post("",validateBodyMiddleware(loginUserSchema), loginUsersControllers)

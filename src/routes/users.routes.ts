import { Request, Response, Router } from "express";
import { createUsersControllers } from "../controllers/users/createUsers.controllers";
import { ensureEmailExistsMiddleware } from "../middlewares/users/ensureEmailExistsMiddleware";
import { listUsersControllers } from "../controllers/users/listUsers.controllers";
import { updateUsersControllers } from "../controllers/users/updateUsers.controllers";
import { deleteUsersControllers } from "../controllers/users/deleteUsers.controllers";
import { ensureUserExistsMiddleware } from "../middlewares/users/ensureUserExistsMiddleware";
import { loginUsersControllers } from "../controllers/users/loginUsers.controllers";
import { tokenValidated } from "../middlewares/tokenValidatedMiddleware";
import { validatedAdminMiddleware } from "../middlewares/adminValidatedMiddleware";
import { validateBodyMiddleware } from "../middlewares/validateBodyMiddleware";
import { updateUserSchema, userSchemaRequest } from "../schemas/users.schemas";
import { notAdminUserMiddleware } from "../middlewares/users/notAdminUserMiddleware";


export const userRoutes: Router = Router()


userRoutes.post("", validateBodyMiddleware(userSchemaRequest), ensureEmailExistsMiddleware, createUsersControllers)
userRoutes.get("",tokenValidated,validatedAdminMiddleware, listUsersControllers)
userRoutes.patch("/:id",tokenValidated, validateBodyMiddleware(updateUserSchema), ensureUserExistsMiddleware, notAdminUserMiddleware, updateUsersControllers)
userRoutes.delete("/:id",tokenValidated,ensureUserExistsMiddleware, validatedAdminMiddleware, deleteUsersControllers)


// updateUserSchema
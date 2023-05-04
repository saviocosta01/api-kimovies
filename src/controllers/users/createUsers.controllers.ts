import { Request, Response } from "express";
import { TUserResponse, TUsersRequest } from "../../interfaces/users.interfaces";
import { createUsersService } from "../../services/users/createUsers.service";


export const createUsersControllers = async(req: Request, res: Response):Promise<Response> => {

    const data: TUsersRequest = req.body

    const newUser: TUserResponse = await createUsersService(data)

    return res.json(newUser)

}
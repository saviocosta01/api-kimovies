import { Request, Response } from "express";
import { TLoginUser } from "../../interfaces/users.interfaces";
import { loginUsersService } from "../../services/users/loginUsers.service";



export const loginUsersControllers = async(req: Request, res: Response): Promise<Response> => {

    const data: TLoginUser = req.body

    const token: string = await loginUsersService(data)

    return res.status(200).json({token})
}
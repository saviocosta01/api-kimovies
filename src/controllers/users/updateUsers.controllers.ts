import { Request, Response } from "express";
import { updateUsersService } from "../../services/users/updateUsers.service";
import { TUserResponse, TUsersUpdate } from "../../interfaces/users.interfaces";



export const updateUsersControllers = async(req: Request, res: Response): Promise<Response> => {

    const id: number = Number(req.params.id);

    const data: TUsersUpdate = req.body

    const updateUsers: TUserResponse = await updateUsersService(id, data)

    return res.status(200).json(updateUsers)

}
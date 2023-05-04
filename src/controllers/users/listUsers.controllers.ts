import { Request, Response } from "express";
import { TListUsers } from "../../interfaces/users.interfaces";
import { listUsersService } from "../../services/users/listUsers.service";

export const listUsersControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const listUsers: TListUsers = await listUsersService();

  return res.json(listUsers);
};

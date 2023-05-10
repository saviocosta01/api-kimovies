import { Request, Response } from "express";
import { deleteUsersService } from "../../services/users/deleteUsers.service";

export const deleteUsersControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);

  await deleteUsersService(id);

  return res.status(204).send();
};

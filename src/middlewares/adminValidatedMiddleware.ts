import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const validatedAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
 
  const userAdmin = res.locals.admin


  if (userAdmin == false) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

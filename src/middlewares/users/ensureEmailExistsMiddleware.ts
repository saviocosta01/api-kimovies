import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export const ensureEmailExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const email = req.body.email;

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      email: email,
    },
  });

  if (user) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};

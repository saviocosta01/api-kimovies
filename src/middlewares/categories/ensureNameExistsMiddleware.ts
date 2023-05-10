import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export const ensureNameExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const { name } = req.body;

  const categoryRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const category: Category | null = await categoryRepository.findOne({
    where: {
      name: name,
    },
  });

  if (category) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

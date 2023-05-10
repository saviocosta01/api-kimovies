import { Request, Response } from "express";
import {
  TCategories,
  TCategoriesRequest,
} from "../../interfaces/categories.interfaces";
import { createCategoriesService } from "../../services/categories/createCategories.service";

export const createCategoriesControllers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TCategoriesRequest = req.body;

  const newCategory: TCategories = await createCategoriesService(data);

  return res.status(201).json(newCategory);
};

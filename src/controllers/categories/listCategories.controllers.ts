import { Request, Response } from "express";
import { listCategoryService } from "../../services/categories/listCategories.service";
import { TListCategories } from "../../interfaces/categories.interfaces";


export const listCategoriesControllers = async(req: Request, res: Response): Promise<Response> => {

    const listCategories: TListCategories = await listCategoryService()

    return res.status(200).json(listCategories)
}
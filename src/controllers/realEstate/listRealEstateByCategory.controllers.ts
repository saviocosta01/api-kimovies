import { Request, Response } from "express";
import { listRealEstateByCategoryService } from "../../services/realEstate/listRealEstateByCategory.service";
import { TListRealEstates } from "../../interfaces/realEstate.interfaces";



export const listRealEstateByCategoryControllers = async(req: Request, res: Response): Promise<Response> => {

    const id: number = Number(req.params.id)

    const listRealEstateByCaretory: TListRealEstates = await listRealEstateByCategoryService(id)

    return res.json(listRealEstateByCaretory)
}
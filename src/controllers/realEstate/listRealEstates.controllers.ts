import { Request, Response } from "express";
import { listRealEstatesService } from "../../services/realEstate/listRealEstates.service";
import { TListRealEstates } from "../../interfaces/realEstate.interfaces";



export const listRealEstatesControllers = async(req: Request, res: Response): Promise<Response> => {
    const listRealEstates: TListRealEstates = await listRealEstatesService()

    return res.status(200).json(listRealEstates)
}
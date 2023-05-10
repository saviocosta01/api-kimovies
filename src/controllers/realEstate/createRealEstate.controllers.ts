import { Request, Response } from "express";
import { TCreateRealEstateRequest, TCreateRealEstateResponse } from "../../interfaces/realEstate.interfaces";
import { createRealEstateService } from "../../services/realEstate/createRealEstate.service";
import { RealEstate } from "../../entities";



export const createRealEstateControllers = async(req: Request, res: Response): Promise<Response> => {

    const data: TCreateRealEstateRequest = req.body

    const newRealEstate: TCreateRealEstateResponse | RealEstate[] = await createRealEstateService(data)

    return res.status(201).json(newRealEstate)
}
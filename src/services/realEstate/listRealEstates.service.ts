import { Repository } from "typeorm"
import { Category, RealEstate } from "../../entities"
import { AppDataSource } from "../../data-source"
import { TListRealEstates } from "../../interfaces/realEstate.interfaces"
import { listRealEstatesSchema } from "../../schemas/realEstate.schema"



export const listRealEstatesService = async(): Promise<TListRealEstates> => {
    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const realEstate:RealEstate | null | any = await realEstateRepository.find({
        relations:{
            address: true
        }
    })
    await realEstateRepository.save(realEstate)
   
    return realEstate
}

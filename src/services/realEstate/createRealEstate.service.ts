import { Repository } from "typeorm";
import { TCreateRealEstateData, TCreateRealEstateRequest } from "../../interfaces/realEstate.interfaces";
import { Address, Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { createRealEstateSchema } from "../../schemas/realEstate.schema";
import { TCreateRealEstateResponse } from "../../interfaces/realEstate.interfaces";



export const createRealEstateService = async(data: any): Promise<RealEstate[]> => {

    const realEstateRepository: Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address)
    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)
    
    const addressData = data.address
    delete data.address

    const category: Category | null = await categoryRepository.findOneBy({id: data.categoryId})
    
    const address = addressRepository.create(addressData)
    await addressRepository.save(address)
        
    const realEstate: RealEstate[]  = realEstateRepository.create({
        ...data, 
         address: address,
         category: category
    })
    await realEstateRepository.save(realEstate)
    
    return realEstate

}
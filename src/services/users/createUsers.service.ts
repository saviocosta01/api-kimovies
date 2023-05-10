import { TUserResponse, TUsersRequest } from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";
import { hash } from "bcryptjs"



export const createUsersService = async(data: any):Promise<TUserResponse> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const user: User[] = userRepository.create(data);
   
     await userRepository.save(user);
    
    const returnUser: TUserResponse = userSchemaResponse.parse(user)
    
    return returnUser
}
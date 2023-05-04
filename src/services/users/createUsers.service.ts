import { TUserResponse, TUsersRequest } from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { userSchemaResponse } from "../../schemas/users.schemas";
import { hash } from "bcryptjs"



export const createUsersService = async(data: any):Promise<TUserResponse> => {

    data.password = await hash(data.password, 10)

    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const user: User[] = userRepository.create(data);
    console.log(user)
  
    const queryResult = await userRepository.save(user);
    console.log(queryResult )

    const returnUser: TUserResponse = userSchemaResponse.parse(user)
    
    return returnUser
}
import { Repository } from "typeorm";
import { TListUsers, TUserResponse } from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { listUserSchema } from "../../schemas/users.schemas";

export const listUsersService = async(): Promise<TListUsers> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const users: User[] = await userRepository.find({
   withDeleted: true
  });

  console.log(users)

  return users;
};

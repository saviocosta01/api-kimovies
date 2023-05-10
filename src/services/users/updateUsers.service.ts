import { Repository } from "typeorm";
import {
  TUserResponse,
  TUsers,
  TUsersUpdate,
} from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import {
  updateUserSchema,
  userSchema,
  userSchemaResponse,
} from "../../schemas/users.schemas";

export const updateUsersService = async (
  id: number,
  data: TUsersUpdate | any
): Promise<TUserResponse> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    id: id,
  });

  const newData = userRepository.create({
    ...user,
    ...data,
  });

  await userRepository.save(newData);

  const returnUser: TUserResponse = userSchemaResponse.parse(newData);

  return returnUser;
};

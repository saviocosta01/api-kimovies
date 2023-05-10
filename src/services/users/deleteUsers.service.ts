import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";

export const deleteUsersService = async (
  id: number
): Promise<void> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null | any = await userRepository.findOneBy({
    id: id,
  });

  await userRepository.softDelete(user);
};

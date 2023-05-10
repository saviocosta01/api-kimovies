import "dotenv/config";
import { Repository } from "typeorm";
import { TLoginUser } from "../../interfaces/users.interfaces";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export const loginUsersService = async (data: TLoginUser): Promise<string> => {
  const { email, password } = data;
  
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: email,
  });

  if (user == undefined) {
    throw new AppError("Invalid credentials", 401);
  }

  const passwordIsValid: boolean = await compare(password, user.password);

  if (!passwordIsValid) {
    throw new AppError("Invalid credentials", 401);
  }
  
  const token: string = sign(
    {admin: user.admin },
    String(process.env.SECRET_KEY),
    { expiresIn: "24h", subject: String(user.id) }
  );

  return token;
};

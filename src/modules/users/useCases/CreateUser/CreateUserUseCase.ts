import { ICreateUser } from "@modules/users/dtos/UserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { hash } from 'bcryptjs';
import { injectable, inject } from "tsyringe";

@injectable()
class CreateUserUseCase {

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }

  async execute({
    name,
    email,
    username,
    password,
    isAdmin
  }: ICreateUser): Promise<User> {

    try {
      const passwordHash = await hash(password, 8);
      const user = await this.usersRepository.create(
        {
          name,
          email,
          username,
          password: passwordHash,
          isAdmin
        }
      )

      return user;
    } catch (error) {
      console.log(error)
      throw new AppError('Internal Server Error', 500)
    }

  }

}

export { CreateUserUseCase }
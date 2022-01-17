import { ICreateUser } from "@modules/users/dtos/UserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
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
  }

}

export { CreateUserUseCase }
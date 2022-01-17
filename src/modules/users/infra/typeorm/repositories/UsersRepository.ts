import { ICreateUser } from "@modules/users/dtos/UserDTO";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm"
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }
  async findById(id: string): Promise<User> {
    const user = this.repository.findOne(id);
    return user
  }
  async find(email: string): Promise<User> {
    const user = await this.repository.findOne({ email })
    return user
  }
  async create(
    {
      name,
      email,
      username,
      password,
      isAdmin
    }: ICreateUser): Promise<User> {
    const user = this.repository.create({
      name,
      email,
      username,
      password,
      isAdmin
    })

    await this.repository.save(user);

    return user;
  }



}

export { UsersRepository }
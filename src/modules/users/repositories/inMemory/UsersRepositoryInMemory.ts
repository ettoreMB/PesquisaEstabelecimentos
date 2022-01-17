import { ICreateUser } from "@modules/users/dtos/UserDTO";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create(
    {
      name,
      email,
      username,
      password,
      isAdmin,

    }: ICreateUser): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      username,
      password,
      isAdmin,
    });

    this.users.push(user);

    return user;
  }
  find(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  getAll(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  delete(email: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  updateStatus(): Promise<void> {
    throw new Error("Method not implemented.");
  }

}

export { UsersRepositoryInMemory }
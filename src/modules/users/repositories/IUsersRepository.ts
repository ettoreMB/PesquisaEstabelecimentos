import { ICreateUser } from "../dtos/UserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  create(data: ICreateUser): Promise<User>;
  find(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  // getAll(): Promise<User[]>;
  // delete(email: string): Promise<void>;
  // updateStatus(): Promise<void>;

}

export { IUsersRepository }
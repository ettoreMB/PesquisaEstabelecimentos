import { IUserResponseDTO } from "../dtos/IUserResponseDTO";
import { instanceToInstance } from 'class-transformer';
class UserMap {
  static toDTO({
    id,
    email,
    username
  }: IUserResponseDTO) {
    const user = instanceToInstance({
      id,
      email,
      username
    });
    return user
  }
}

export { UserMap }
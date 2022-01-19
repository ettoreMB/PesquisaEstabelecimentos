import { IUserResponseDTO } from "@modules/users/dtos/IUserResponseDTO";
import { UserMap } from "@modules/users/mappers/UserMap";
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class GetProfileUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }
  async execute(id: string): Promise<IUserResponseDTO> {
    const user = await this.usersRepository.findById(id);

    return UserMap.toDTO(user);
  }
}

export { GetProfileUseCase }
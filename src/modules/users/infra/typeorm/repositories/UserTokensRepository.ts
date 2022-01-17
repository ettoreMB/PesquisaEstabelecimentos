import { ICreateUserTokenDTO } from "@modules/users/dtos/ICreateUserTokenDTO";
import { IUsersTokensRepository } from "@modules/users/repositories/IUsersTokensRepository";
import { getRepository, Repository } from "typeorm";
import { UserTokens } from "../entities/UserTokens";

class UserTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create({ user_id, refresh_token, expires_in, }: ICreateUserTokenDTO): Promise<UserTokens> {
    const userToken = this.repository.create({
      expires_in,
      refresh_token,
      user_id
    })
    await this.repository.save(userToken);

    return userToken;
  }
  async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens> {
    const usersTokens = await this.repository.findOne({
      user_id,
      refresh_token
    });

    return usersTokens
  }
  async findByRefreshToken(refresh_token: string): Promise<UserTokens> {
    const userToken = await this.repository.findOne({ refresh_token });

    return userToken;
  }
  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

}

export { UserTokensRepository }
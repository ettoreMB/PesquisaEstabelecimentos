import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { IUsersTokensRepository } from "@modules/users/repositories/IUsersTokensRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import auth from "@config/auth";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  },
  token: string;
  refresh_token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('DayJsDateProvider')
    private dateProvider: IDateProvider,
  ) { }
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.find(email);

    if (!user) {
      throw new AppError('Email ou password incorreto', 401);
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("Email or Password is Inconrrect", 401);
    }

    const token = sign({}, auth.secret_token, {
      subject: user.id,
      expiresIn: auth.expires_in_token,
    });

    const refresh_token = sign({ email }, auth.secret_refresh_token, {
      subject: user.id,
      expiresIn: auth.expires_in_refresh_token
    })

    const refresh_token_expires_date = this.dateProvider.addDays(auth.expires_refresh_token_days)

    await this.usersTokensRepository.create({
      expires_in: refresh_token_expires_date,
      refresh_token,
      user_id: user.id
    })

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      },
      refresh_token
    }
    return tokenReturn
  }
}

export { AuthenticateUserUseCase }
import { container } from 'tsyringe';

import '@shared/container/providers';

import { IEstabelecimentoRepository } from '@modules/Estabelecimentos/repositories/IEstabelecimentosRepository';
import { EstabelecimentosRepository } from '@modules/Estabelecimentos/infra/typeorm/repositories/EstabelecimentosRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { UserTokensRepository } from '@modules/users/infra/typeorm/repositories/UserTokensRepository';


//IEstabelecimentosRespository
container.registerSingleton<IEstabelecimentoRepository>(
  "EstabelecimentosRepository",
  EstabelecimentosRepository
)

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
)

container.registerSingleton<IUsersTokensRepository>(
  "UsersTokensRepository",
  UserTokensRepository
)


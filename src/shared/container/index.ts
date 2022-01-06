import { container } from 'tsyringe';

import { IEstabelecimentoRepository } from 'modules/Estabelecimentos/repositories/IEstabelecimentosRepository';
import { EstabelecimentosRepository } from 'modules/Estabelecimentos/infra/typeorm/repositories/EstabelecimentosRepository';
import { IEnderecosRepository } from 'modules/Estabelecimentos/repositories/IEnderecoRepository';
import { EnderecosRepository } from 'modules/Estabelecimentos/infra/typeorm/repositories/EnderecosRepository';


//IEstabelecimentosRespository
container.registerSingleton<IEstabelecimentoRepository>(
  "EstabelecimentosRepository",
  EstabelecimentosRepository
)

//IEnderecosRepository
container.registerSingleton<IEnderecosRepository>(
  "EnderecosRepository",
  EnderecosRepository
)
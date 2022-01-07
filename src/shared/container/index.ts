import { container } from 'tsyringe';

import { IEstabelecimentoRepository } from '@modules/Estabelecimentos/repositories/IEstabelecimentosRepository';
import { EstabelecimentosRepository } from '@modules/Estabelecimentos/infra/typeorm/repositories/EstabelecimentosRepository';


//IEstabelecimentosRespository
container.registerSingleton<IEstabelecimentoRepository>(
  "EstabelecimentosRepository",
  EstabelecimentosRepository
)


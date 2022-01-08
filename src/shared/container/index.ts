import { container } from 'tsyringe';

import { EstabelecimentosRepository } from '@modules/Estabelecimentos/infra/typeorm/repositories/EstabelecimentosRepository';
import { IEstabelecimentoRepository } from '@modules/Estabelecimentos/repositories/IEstabelecimentosRepository';


//IEstabelecimentosRespository
container.registerSingleton<IEstabelecimentoRepository>(
  "EstabelecimentosRepository",
  EstabelecimentosRepository
);


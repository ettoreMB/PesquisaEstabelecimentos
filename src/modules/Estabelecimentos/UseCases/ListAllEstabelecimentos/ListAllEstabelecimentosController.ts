import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListAllEstabelecimentosUseCase } from './ListAllEstabelecimentosUseCase'

class ListAllEstabelecimentosController {
  async handle(req: Request, res: Response) {
    const listAll = container.resolve(ListAllEstabelecimentosUseCase);

    const estabelecimentos = await listAll.execute();

    return res.status(200).json(estabelecimentos)
  }
}

export { ListAllEstabelecimentosController }
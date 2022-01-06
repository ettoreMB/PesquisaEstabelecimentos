import { Request, Response } from "express";
import { container } from 'tsyringe'
import { SearchCNPJUseCase } from "./SearchCNPJUseCase";

class SearchCNPJController {
  async handle(req: Request, res: Response): Promise<Response> {

    const { cnpj } = req.body

    const searchCNPJUseCase = container.resolve(SearchCNPJUseCase)

    await searchCNPJUseCase.execute(cnpj)

    return res.status(200).json({ message: 'Estabelecimento Encontrado com Sucesso' })
  }
}

export { SearchCNPJController }
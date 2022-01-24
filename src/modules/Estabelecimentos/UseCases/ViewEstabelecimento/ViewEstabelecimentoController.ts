import { Request, Response, response } from "express"
import { container } from "tsyringe";
import { ViewEstabelecimentoUseCase } from "./ViewEstabelecimentoUseCase";

class ViewEstabelecimentoController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { cnpj } = req.params;

    const viewEstabelecimentoUseCase = container.resolve(ViewEstabelecimentoUseCase);
    const estabelecimento = await viewEstabelecimentoUseCase.execute(cnpj);

    return res.json(estabelecimento);
  }
}

export { ViewEstabelecimentoController }
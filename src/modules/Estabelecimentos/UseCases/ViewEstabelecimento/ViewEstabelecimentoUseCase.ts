import { IEstabelecimentoRepository } from "@modules/Estabelecimentos/repositories/IEstabelecimentosRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class ViewEstabelecimentoUseCase {
  constructor(
    @inject('EstabelecimentosRepository')
    private estabelecimentosRepository: IEstabelecimentoRepository
  ) { }


  async execute(cnpj: string) {
    const estabelecimento = await this.estabelecimentosRepository.findOne(cnpj);

    if (!estabelecimento) {
      throw new AppError('Estabelecimento Não Encontrado')
    }

    return estabelecimento
  }
}

export { ViewEstabelecimentoUseCase }
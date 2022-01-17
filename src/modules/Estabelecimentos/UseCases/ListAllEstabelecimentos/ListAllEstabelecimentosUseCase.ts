import { EstabelecimentosRepository } from "@modules/Estabelecimentos/infra/typeorm/repositories/EstabelecimentosRepository";
import { IEstabelecimentoRepository } from "@modules/Estabelecimentos/repositories/IEstabelecimentosRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllEstabelecimentosUseCase {

  constructor(
    @inject('EstabelecimentosRepository')
    private estabelecimentosRepository: IEstabelecimentoRepository
  ) { }
  async execute() {
    try {
      const estabelecimentos = await this.estabelecimentosRepository.getAll();

      return estabelecimentos
    } catch (error) {
      throw new AppError('Falha ao Listar Estabelecimentos')
    }
  }
}

export { ListAllEstabelecimentosUseCase }
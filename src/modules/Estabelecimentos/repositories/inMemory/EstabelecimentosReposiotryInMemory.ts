import { ICreateEstabelecimentoDTO } from "modules/Estabelecimentos/dtos/ICreateEstabelecimento";
import { Estabelecimento } from "modules/Estabelecimentos/infra/typeorm/entities/Estabelecimento";

class EstabelecimentosRepositoryInMemory {
  estabelecimentos: Estabelecimento[] = [];

  async create({
    cnpj,
    razaoSocial,
    nomeFantasia,
    codigoAtividadeEconomica,
    codigoNaturezaJuridica,
    dataFundacao,
    matrizFilial
  }: ICreateEstabelecimentoDTO): Promise<Estabelecimento> {
    const estabelecimento = new Estabelecimento();

    Object.assign(estabelecimento, {
      cnpj,
      razaoSocial,
      nomeFantasia,
      codigoAtividadeEconomica,
      codigoNaturezaJuridica,
      dataFundacao,
      matrizFilial
    })

    this.estabelecimentos.push(estabelecimento);

    return estabelecimento
  }
}

export { EstabelecimentosRepositoryInMemory }
import { ICreateEstabelecimentoDTO } from "@modules/Estabelecimentos/dtos/ICreateEstabelecimento";
import { IEstabelecimentoRepository } from "@modules/Estabelecimentos/repositories/IEstabelecimentosRepository";
import { getRepository, Repository } from "typeorm";
import { Estabelecimento } from "../entities/Estabelecimento";

class EstabelecimentosRepository implements IEstabelecimentoRepository {
  private repository: Repository<Estabelecimento>;

  constructor() {
    this.repository = getRepository(Estabelecimento)
  }
  async find(cnpj: string): Promise<Estabelecimento> {
    const estabelecimento = await this.repository.findOne({ cnpj });

    return estabelecimento

  }

  async create(
    {
      cnpj,
      razaoSocial,
      nomeFantasia,
      matrizFilial,
      dataFundacao,
      codigoAtividadeEconomicaDescricao,
      codigoAtividadeEconomica,
      codigoNaturezaJuridica,
      codigoNaturezaJuridicaDescricao,
      sitacaoRFB,
      dataSituacaoRFB,
      logradouro_tipo,
      logradouro,
      logradouro_numero,
      logradouro_complemento,
      logradouro_bairro,
      logradouro_cidade,
      logradouro_estado,
      logradouro_cep,
      logradouro_data_atualizacao,
      codigo_ibge,
    }: ICreateEstabelecimentoDTO): Promise<void> {

    const estabelecimento = await this.repository.create(
      {
        cnpj,
        razaoSocial,
        nomeFantasia,
        matrizFilial,
        dataFundacao,
        codigoAtividadeEconomicaDescricao,
        codigoAtividadeEconomica,
        codigoNaturezaJuridica,
        codigoNaturezaJuridicaDescricao,
        sitacaoRFB,
        dataSituacaoRFB,
        logradouro_tipo,
        logradouro,
        logradouro_numero,
        logradouro_complemento,
        logradouro_bairro,
        logradouro_cidade,
        logradouro_estado,
        logradouro_cep,
        logradouro_data_atualizacao,
        codigo_ibge,
      }
    );

    this.repository.save(estabelecimento)
  }

}

export { EstabelecimentosRepository }
import { Estabelecimento } from "../../infra/typeorm/entities/Estabelecimento";
import { ICreateEstabelecimentoDTO } from "@modules/Estabelecimentos/dtos/ICreateEstabelecimento";
import { IEstabelecimentoRepository } from "../IEstabelecimentosRepository";

class EstabelecimentosRepositoryInMemory implements IEstabelecimentoRepository {

  estabelecimentos: Estabelecimento[] = [{
    id: '12345677',
    cnpj: "99999999999962",
    razaoSocial: "DOCUMENTO CNPJ DE TESTES",
    nomeFantasia: "EMPRESA DE TESTES",
    dataFundacao: "2007 - 05 - 02",
    matrizFilial: "MATRIZ",
    codigoAtividadeEconomica: "82.91-1-00",
    codigoAtividadeEconomicaDescricao: "Atividades de cobranças e informações cadastrais",
    codigoNaturezaJuridica: "206-2",
    codigoNaturezaJuridicaDescricao: "SOCIEDADE EMPRESARIA LIMITADA",
    sitacaoRFB: "ATIVA",
    dataSituacaoRFB: "10/01/2022",
    logradouro_tipo: 2,
    logradouro: "RUA DE TESTES",
    logradouro_numero: "99999",
    logradouro_complemento: "APTO 99",
    logradouro_bairro: "BAIRRO DE TESTES",
    logradouro_cidade: "CIDADE DE TESTES",
    logradouro_estado: "XX",
    logradouro_cep: "99999999",
    logradouro_data_atualizacao: new Date(),
    codigo_ibge: 99999,
    created_at: new Date(),
    updated_at: new Date(),
  }]

  async create({
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
    const estabelecimento = new Estabelecimento();

    Object.assign(estabelecimento, {
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
    });

    this.estabelecimentos.push(estabelecimento);

  }

  async getAll(): Promise<Estabelecimento[]> {
    const estabelecimentos = this.estabelecimentos;

    return estabelecimentos;
  }

  async findOne(cnpj: string): Promise<Estabelecimento> {
    const estabelecimento = this.estabelecimentos.find(estabelecimentoBanco => estabelecimentoBanco.cnpj === cnpj);

    return estabelecimento;
  }
}

export { EstabelecimentosRepositoryInMemory }
import { inject, injectable } from "tsyringe";
import { ICreateEstabelecimentoDTO, IEstabelecimentoSOADTO } from "@modules/Estabelecimentos/dtos/ICreateEstabelecimento";
import { EstabelecimentosRepository } from "@modules/Estabelecimentos/infra/typeorm/repositories/EstabelecimentosRepository";
import { soaSearch } from "@shared/container/providers/SOAWebServices"
import { AppError } from "@shared/errors/AppError";
import { IEstabelecimentoRepository } from "@modules/Estabelecimentos/repositories/IEstabelecimentosRepository";

interface IEstabelecimentoReq {
  cnpj: string;
}

@injectable()
class SearchCNPJUseCase {

  constructor(
    @inject('EstabelecimentosRepository')
    private estabelecimentosRepository: IEstabelecimentoRepository,

  ) { }

  async execute({ cnpj }: IEstabelecimentoReq): Promise<any> {
    const filteredCNPJ = cnpj.replace(/\D+/g, "")

    const estabelecimento = await this.estabelecimentosRepository.findOne(filteredCNPJ)

    if (!estabelecimento) {
      //pesquisa Estabelecimento SOA
      const estabelecimentoSOA: IEstabelecimentoSOADTO = await soaSearch(filteredCNPJ);

      if (estabelecimentoSOA.Transacao.Status === true) {
        const newEstabelecimento: ICreateEstabelecimentoDTO =
        {
          cnpj: filteredCNPJ,
          razaoSocial: estabelecimentoSOA.RazaoSocial,
          nomeFantasia: estabelecimentoSOA.NomeFantasia,
          dataFundacao: estabelecimentoSOA.DataFundacao,
          matrizFilial: estabelecimentoSOA.MatrizFilial,
          codigoAtividadeEconomica: estabelecimentoSOA.CodigoAtividadeEconomica,
          codigoAtividadeEconomicaDescricao: estabelecimentoSOA.CodigoAtividadeEconomicaDescricao,
          codigoNaturezaJuridica: estabelecimentoSOA.CodigoNaturezaJuridica,
          codigoNaturezaJuridicaDescricao: estabelecimentoSOA.CodigoAtividadeEconomicaDescricao,
          sitacaoRFB: estabelecimentoSOA.SituacaoRFB,
          dataSituacaoRFB: estabelecimentoSOA.DataSituacaoRFB,
          logradouro_tipo: estabelecimentoSOA.Enderecos[0].Tipo,
          logradouro: estabelecimentoSOA.Enderecos[0].Logradouro,
          logradouro_numero: estabelecimentoSOA.Enderecos[0].Numero,
          logradouro_complemento: estabelecimentoSOA.Enderecos[0].Complemento,
          logradouro_bairro: estabelecimentoSOA.Enderecos[0].Bairro,
          logradouro_cidade: estabelecimentoSOA.Enderecos[0].Cidade,
          logradouro_cep: estabelecimentoSOA.Enderecos[0].CEP,
          logradouro_estado: estabelecimentoSOA.Enderecos[0].Estado,
          logradouro_data_atualizacao: estabelecimentoSOA.Enderecos[0].DataAtualizacao,
          codigo_ibge: estabelecimentoSOA.Enderecos[0].CodigoIBGE
        }

        //salva no banco
        await this.estabelecimentosRepository.create(newEstabelecimento)

        //retorna o estabelecimento
        return newEstabelecimento
      }

      throw new AppError('Estabelecimento Não encontrato na receita')
    }

    return estabelecimento


  }
}

export { SearchCNPJUseCase }
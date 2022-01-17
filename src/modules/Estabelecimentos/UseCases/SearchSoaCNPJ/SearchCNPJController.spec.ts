import { EstabelecimentosRepositoryInMemory } from "@modules/Estabelecimentos/repositories/inMemory/EstabelecimentosReposiotryInMemory";
import { SearchCNPJUseCase } from "./SearchCNPJUseCase";


let searchCNPJUseCase: SearchCNPJUseCase;
let estabelecimentosRepositoryInMemory: EstabelecimentosRepositoryInMemory;
beforeEach(() => {
  estabelecimentosRepositoryInMemory = new EstabelecimentosRepositoryInMemory();
  searchCNPJUseCase = new SearchCNPJUseCase(estabelecimentosRepositoryInMemory);
})


describe('Search CNPJ Test', () => {
  it('Should Able to Search a new CNPJ', async () => {
    // const estabelecimento = {
    //   id: '12345677',
    //   cnpj: "99999999999962",
    //   razaoSocial: "DOCUMENTO CNPJ DE TESTES",
    //   nomeFantasia: "EMPRESA DE TESTES",
    //   dataFundacao: "2007 - 05 - 02",
    //   matrizFilial: "MATRIZ",
    //   codigoAtividadeEconomica: "82.91-1-00",
    //   codigoAtividadeEconomicaDescricao: "Atividades de cobranças e informações cadastrais",
    //   codigoNaturezaJuridica: "206-2",
    //   codigoNaturezaJuridicaDescricao: "SOCIEDADE EMPRESARIA LIMITADA",
    //   sitacaoRFB: "ATIVA",
    //   dataSituacaoRFB: "10/01/2022",
    //   logradouro_tipo: 2,
    //   logradouro: "RUA DE TESTES",
    //   logradouro_numero: "99999",
    //   logradouro_complemento: "APTO 99",
    //   logradouro_bairro: "BAIRRO DE TESTES",
    //   logradouro_cidade: "CIDADE DE TESTES",
    //   logradouro_estado: "XX",
    //   logradouro_cep: "99999999",
    //   logradouro_data_atualizacao: new Date(),
    //   codigo_ibge: 99999,
    //   created_at: new Date(),
    //   updated_at: new Date(),
    // }

    const cnpj = '99999999999962'

    await searchCNPJUseCase.execute({ cnpj })
    const findedCnpj = await estabelecimentosRepositoryInMemory.findOne(cnpj)
    expect(findedCnpj).toHaveProperty("cnpj")
  })


})
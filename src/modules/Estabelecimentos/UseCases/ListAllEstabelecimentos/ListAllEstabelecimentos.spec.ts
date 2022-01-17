import { EstabelecimentosRepositoryInMemory } from "@modules/Estabelecimentos/repositories/inMemory/EstabelecimentosReposiotryInMemory";
import { SearchCNPJUseCase } from "../SearchSoaCNPJ/SearchCNPJUseCase";
import { ListAllEstabelecimentosUseCase } from "./ListAllEstabelecimentosUseCase";



let listAllEstabelecientosUseCase: ListAllEstabelecimentosUseCase;
let estabelecimentosRepositoryInMemory: EstabelecimentosRepositoryInMemory;
let searchCNPJUseCase: SearchCNPJUseCase;

beforeEach(() => {
  estabelecimentosRepositoryInMemory = new EstabelecimentosRepositoryInMemory();
  listAllEstabelecientosUseCase = new ListAllEstabelecimentosUseCase(estabelecimentosRepositoryInMemory);
  searchCNPJUseCase = new SearchCNPJUseCase(estabelecimentosRepositoryInMemory)
})

describe('Find CNPJ', () => {
  it('Should be able to list all places', async () => {
    const cnpj = '99999999999962'

    const newCNPJ = await searchCNPJUseCase.execute({ cnpj })

    const estabelecimentos = await listAllEstabelecientosUseCase.execute();

    expect(estabelecimentos).toEqual([newCNPJ]);
  })

})
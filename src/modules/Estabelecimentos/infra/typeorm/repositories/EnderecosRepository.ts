import { ICreateEnderecoDTO } from "modules/Estabelecimentos/dtos/ICreateEndereco";
import { IEnderecosRepository } from "modules/Estabelecimentos/repositories/IEnderecoRepository";
import { getRepository, Repository } from "typeorm";
import { Endereco } from "../entities/Endereco";

class EnderecosRepository implements IEnderecosRepository {
  private repository: Repository<Endereco>

  constructor() {
    this.repository = getRepository(Endereco)
  }

  async create(
    {
      cnpj_endereco,
      tipo,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep,
      codigoIBGE
    }: ICreateEnderecoDTO): Promise<void> {
    const estabelecimento = await this.repository.create({
      cnpj_endereco,
      tipo,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      cep,
      codigoIBGE
    });

  }
}

export { EnderecosRepository }
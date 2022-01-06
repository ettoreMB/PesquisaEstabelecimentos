import { ICreateEnderecoDTO } from "../dtos/ICreateEndereco";
import { ICreateEstabelecimentoDTO } from "../dtos/ICreateEstabelecimento";

interface IEnderecosRepository {
  create(data: ICreateEnderecoDTO): Promise<void>;
}

export { IEnderecosRepository }
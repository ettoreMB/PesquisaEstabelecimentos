import { ICreateEstabelecimentoDTO } from "../dtos/ICreateEstabelecimento";
import { Estabelecimento } from "../infra/typeorm/entities/Estabelecimento";


interface IEstabelecimentoRepository {
  create(data: ICreateEstabelecimentoDTO): Promise<void>;
  find(cnpj: string): Promise<Estabelecimento>
}

export { IEstabelecimentoRepository }
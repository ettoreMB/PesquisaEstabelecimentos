import { ICreateEstabelecimentoDTO } from "../dtos/ICreateEstabelecimento";
import { Estabelecimento } from "../infra/typeorm/entities/Estabelecimento";


interface IEstabelecimentoRepository {
  create(data: ICreateEstabelecimentoDTO): Promise<void>;
  findOne(cnpj: string): Promise<Estabelecimento>;
  getAll(): Promise<Estabelecimento[]>;
}

export { IEstabelecimentoRepository }
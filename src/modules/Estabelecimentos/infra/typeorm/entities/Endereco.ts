import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity("estabelecimentos")

class Endereco {
  @PrimaryColumn()
  id?: string;

  @Column()
  cnpj_endereco: string;

  @Column()
  tipo: string;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @Column()
  cep: string;

  @Column()
  codigoIBGE: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Endereco }
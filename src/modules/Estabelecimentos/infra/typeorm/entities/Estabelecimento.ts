import { Column, Entity, PrimaryColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid';

@Entity("estabelecimentos")

class Estabelecimento {
  @PrimaryColumn()
  id?: string;

  @Column()
  cnpj: string;

  @Column()
  razaoSocial: string;

  @Column()
  nomeFantasia: string;

  @Column()
  dataFundacao: string;

  @Column()
  matrizFilial: string;

  @Column()
  codigoAtividadeEconomica: string;

  @Column()
  codigoAtividadeEconomicaDescricao: string;

  @Column()
  codigoNaturezaJuridica: string;

  @Column()
  codigoNaturezaJuridicaDescricao: string;

  @Column()
  sitacaoRFB: string;

  @Column()
  dataSituacaoRFB: string;

  @Column()
  logradouro_tipo: number;

  @Column()
  logradouro: string;

  @Column()
  logradouro_numero: string;

  @Column()
  logradouro_complemento: string;

  @Column()
  logradouro_bairro: string;

  @Column()
  logradouro_cidade: string;

  @Column()
  logradouro_estado: string;

  @Column()
  logradouro_cep: string;

  @Column()
  logradouro_data_atualizacao: Date;

  @Column()
  codigo_ibge: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;



  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Estabelecimento }
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class estabelecimentos1641323518813 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table(
        {
          name: "estabelecimentos",
          columns: [
            {
              name: "id",
              type: "uuid",
              isPrimary: true,
            },
            {
              name: "cnpj",
              type: "varchar",
              isUnique: true,
            },
            {
              name: "razaoSocial",
              type: "varchar"
            },
            {
              name: "nomeFantasia",
              type: "varchar",
              isNullable: true
            },
            {
              name: "dataFundacao",
              type: "varchar",
              isNullable: true
            },
            {
              name: "matrizFilial",
              type: "varchar"
            },
            {
              name: "codigoAtividadeEconomica",
              type: "varchar"
            },
            {
              name: "codigoAtividadeEconomicaDescricao",
              type: "varchar"
            },
            {
              name: "codigoNaturezaJuridica",
              type: "varchar"
            },
            {
              name: "sitacaoRFB",
              type: "varchar",
              isNullable: true
            },
            {
              name: "dataSituacaoRFB",
              type: "varchar",
              isNullable: true
            },
            {
              name: "logradouro_tipo",
              type: "numeric",
              isNullable: true
            },
            {
              name: "logradouro",
              type: "varchar"
            },
            {
              name: "logradouro_numero",
              type: "varchar"
            },
            {
              name: "logradouro_complemento",
              type: "varchar",
              isNullable: true,
            },
            {
              name: "logradouro_bairro",
              type: "varchar",
              isNullable: true
            },
            {
              name: "logradouro_cidade",
              type: "varchar"
            },
            {
              name: "logradouro_estado",
              type: "varchar",
              isNullable: true
            },
            {
              name: "logradouro_cep",
              type: "varchar",
              isNullable: true
            },
            {
              name: "logradouro_data_atualizacao",
              type: "timestamp",
              isNullable: true
            },
            {
              name: "codigoNaturezaJuridicaDescricao",
              type: "varchar"
            },
            {
              name: "codigo_ibge",
              type: "varchar"
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            },
            {
              name: "updated_at",
              type: "timestamp",
              default: "now()"
            },

          ]
        }
      )
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("estabelecimentos")
  }

}

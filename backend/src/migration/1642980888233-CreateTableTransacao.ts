import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableTransacao1642980888233 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'transacao',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'tipo_transacao_id',
            type: 'int',
          },
          {
            name: 'data_ocorrencia',
            type: 'datetime',
          },
          {
            name: 'valor_movimentacao',
            type: 'decimal(10,2)',
          },
          {
            name: 'cpf_beneficiario',
            type: 'varchar(11)',
          },
          {
            name: 'numero_cartao',
            type: 'varchar(12)',
          },
          {
            name: 'dono_loja',
            type: 'varchar(14)',
          },
          {
            name: 'nome_loja',
            type: 'varchar(19)',
          },
        ],
      }),
      true,
      false,
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('transacao', true);
  }
}

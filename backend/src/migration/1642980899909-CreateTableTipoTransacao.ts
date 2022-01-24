import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableTipoTransacao1642980899909
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'tipo_transacao',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'tipo',
            type: 'int',
          },
          {
            name: 'descricao',
            type: "enum('Débito', 'Boleto', 'Financiamento', 'Crédito', 'Recebimento Empréstimo', 'Vendas', 'Recebimento TED', 'Recebimento DOC', 'Aluguel')",
          },
          {
            name: 'natureza',
            type: "enum('ENTRADA', 'SAIDA')",
          },
          {
            name: 'sinal',
            type: "enum('+', '-')",
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('tipo_transacao', true);
  }
}

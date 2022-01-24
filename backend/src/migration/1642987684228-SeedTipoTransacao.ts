import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedTipoTransacao1642987684228 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query(`insert into tipo_transacao (tipo, descricao, natureza, sinal) values
    (1, 'Débito', 'Entrada', '+'),
    (2, 'Boleto', 'Saída', '-'),
    (3, 'Financiamento', 'Saída', '-'),
    (4, 'Crédito', 'Entrada', '+'),
    (5, 'Recebimento Empréstimo', 'Entrada', '+'),
    (6, 'Vendas', 'Entrada', '+'),
    (7, 'Recebimento TED', 'Entrada', '+'),
    (8, 'Recebimento DOC', 'Entrada', '+'),
    (9, 'Aluguel', 'Saída', '-')
     `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.clearTable('tipo_transacao');
  }
}

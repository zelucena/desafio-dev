import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class TrancacaoTipoTransacaoFK1642988756956
  implements MigrationInterface
{
  private fk: TableForeignKey;

  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query(
      'alter table transacao add constraint fk_transacao_tipo_transacao foreign key(tipo_transacao_id) references tipo_transacao(id)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.query(
      'alter table transacao drop foreign key fk_transacao_tipo_transacao',
    );
  }
}

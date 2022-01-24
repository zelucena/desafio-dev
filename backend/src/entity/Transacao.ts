import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import TipoTransacao from './TipoTransacao';

@Entity()
export default class Transacao {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'tipo_transacao_id' })
  tipoTransacaoId: number;

  @ManyToOne(() => TipoTransacao, { eager: true })
  @JoinColumn({ name: 'tipo_transacao_id', referencedColumnName: 'id' })
  tipoTransacao?: TipoTransacao;

  @Column({ name: 'data_ocorrencia' })
  dataOcorrencia: Date;

  @Column({ name: 'valor_movimentacao' })
  valorMovimentacao: number;

  @Column({ name: 'cpf_beneficiario' })
  cpfBeneficiario: string;

  @Column({ name: 'numero_cartao' })
  numeroCartao: string;

  @Column({ name: 'dono_loja' })
  donoLoja: string;

  @Column({ name: 'nome_loja' })
  nomeLoja: string;

  constructor(data?: Transacao) {
    if (data) {
      Object.assign(this, data);
    }
  }
}

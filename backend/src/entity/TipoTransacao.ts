import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class TipoTransacao {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  tipo: number;

  @Column()
  descricao: string;

  @Column()
  natureza: string;

  @Column()
  sinal: string;

  constructor(data?: TipoTransacao) {
    if (data) {
      Object.assign(this, data);
    }
  }
}

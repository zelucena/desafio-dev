import { getRepository, Repository } from 'typeorm';
import Transacao from '../entity/Transacao';

export default class TransacaoService {
  private repository: Repository<Transacao>;

  constructor() {
    this.repository = getRepository(Transacao);
  }

  fetch(): Promise<Transacao[]> {
    return this.repository.find();
  }

  saveAll(transacoes: ITransacaoDTO[]): Promise<Transacao[]> {
    return Promise.all(transacoes.map(this.save));
  }

  save(transacaoDTO: ITransacaoDTO): Promise<Transacao> {
    const transacao = new Transacao({
      tipoTransacaoId: transacaoDTO.tipo,
      dataOcorrencia: transacaoDTO.data,
      valorMovimentacao: transacaoDTO.valor,
      cpfBeneficiario: transacaoDTO.cpf,
      numeroCartao: transacaoDTO.cartao,
      donoLoja: transacaoDTO.donoLoja,
      nomeLoja: transacaoDTO.nomeLoja,
    });
    return this.repository.save(transacao);
  }
}

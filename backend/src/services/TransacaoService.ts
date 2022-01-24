import { getRepository, Repository } from 'typeorm';
import Transacao from '../entity/Transacao';

export default class TransacaoService {
  private repository: Repository<Transacao>;

  constructor() {
    this.repository = getRepository(Transacao);
  }

  salvar(transacoes: ITransacaoDTO[]) {
    return Promise.all(
      transacoes.map(async transacaoDTO => {
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
      }),
    );
  }
}

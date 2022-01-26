import TransacaoService from 'src/services/TransacaoService';
import { createConnection, getConnection } from 'typeorm';
import { transacoesObjeto } from '../fixture/transacao.fixture';

describe('services/TransacaoService', () => {
  beforeAll(async () => {
    await createConnection();
  });
  test('Save', async () => {
    const transacaoService = new TransacaoService();

    const t = transacoesObjeto[0];
    const response = await transacaoService.save(t);

    expect(t.tipo).toEqual(response.tipoTransacaoId);
    expect(t.data.getTime()).toEqual(response.dataOcorrencia.getTime());
    expect(t.valor).toEqual(response.valorMovimentacao);
    expect(t.cpf).toEqual(response.cpfBeneficiario);
    expect(t.cartao).toEqual(response.numeroCartao);
    expect(t.donoLoja).toEqual(response.donoLoja);
    expect(t.nomeLoja).toEqual(response.nomeLoja);
  });

  afterAll(async () => {
    const defaultConnection = getConnection('default');
    await defaultConnection.close();
  });
});

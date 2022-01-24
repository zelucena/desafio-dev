import TransacoesCNABService from '../../modules/TransacoesParser';
import { transacoesCNAB, transacoesObjeto } from '../fixture/transacao.fixture';

describe('TransacoesCNABService', () => {
  test('Parse string[] => Transacao[]', () => {
    const transacoesCNABService = new TransacoesCNABService();
    const resultado = transacoesCNABService.parse(transacoesCNAB);
    expect(resultado).toHaveLength(transacoesCNAB.length);
    expect(resultado).toStrictEqual(transacoesObjeto);
  });
});

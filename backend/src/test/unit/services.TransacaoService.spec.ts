import TransacaoService from 'src/services/TransacaoService';
import { transacoesObjeto, transacoesDB } from '../fixture/transacao.fixture';

describe('services/TransacaoService', () => {
  test('Save', async () => {
    const transacaoService = new TransacaoService();
    const resultado = await transacaoService.salvar(transacoesObjeto);
  });
});

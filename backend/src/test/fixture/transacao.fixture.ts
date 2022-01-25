export const transacoesCNAB = [
  '3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO       ',
  '5201903010000013200556418150633123****7687145607MARIA JOSEFINALOJA DO Ó - MATRIZ',
  '3201903010000610200232702980566777****1313172712JOSÉ COSTA    MERCEARIA 3 IRMÃOS',
];

export const transacoesObjeto = [
  {
    tipo: 3,
    data: new Date('2019-03-01 15:34:53 GMT-0300'),
    valor: 142.0,
    cpf: '09620676017',
    cartao: '4753****3153',
    hora: '15:34:53',
    donoLoja: 'JOÃO MACEDO',
    nomeLoja: 'BAR DO JOÃO',
  },
  {
    tipo: 5,
    data: new Date('2019-03-01 14:56:07 GMT-0300'),
    valor: 132.0,
    cpf: '55641815063',
    cartao: '3123****7687',
    hora: '14:56:07',
    donoLoja: 'MARIA JOSEFINA',
    nomeLoja: 'LOJA DO Ó - MATRIZ',
  },
  {
    tipo: 3,
    data: new Date('2019-03-01 17:27:12 GMT-0300'),
    valor: 6102.0,
    cpf: '23270298056',
    cartao: '6777****1313',
    hora: '17:27:12',
    donoLoja: 'JOSÉ COSTA',
    nomeLoja: 'MERCEARIA 3 IRMÃOS',
  },
];

export const transacoesDB = [
  {
    tipoTransacaoId: 3,
    dataOcorrencia: '2019-03-01T18:34:53.000Z',
    valorMovimentacao: 142,
    cpfBeneficiario: '09620676017',
    numeroCartao: '4753****3153',
    donoLoja: 'JOÃO MACEDO',
    nomeLoja: 'BAR DO JOÃO',
  },
  {
    tipoTransacaoId: 5,
    dataOcorrencia: '2019-03-01T17:56:07.000Z',
    valorMovimentacao: 132,
    cpfBeneficiario: '55641815063',
    numeroCartao: '3123****7687',
    donoLoja: 'MARIA JOSEFINA',
    nomeLoja: 'LOJA DO Ó - MATRIZ',
  },
  {
    tipoTransacaoId: 3,
    dataOcorrencia: '2019-03-01T20:27:12.000Z',
    valorMovimentacao: 122,
    cpfBeneficiario: '84515254073',
    numeroCartao: '6777****1313',
    donoLoja: 'MARCOS PEREIRA',
    nomeLoja: 'MERCADO DA AVENIDA',
  },
];

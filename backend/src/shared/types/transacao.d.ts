interface ITransacaoDTO {
  tipo: number;
  data: Date;
  valor: number;
  cpf: string;
  cartao: string;
  hora: string;
  donoLoja: string;
  nomeLoja: string;
}

interface ITipoTransacaoDTO {
  tipo: number;
  descricao: string;
  natureza: 'ENTRADA' | 'SAIDA';
  sinal: '+' | '-';
}

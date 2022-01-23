interface Transacao {
  tipo: number;
  data: Date;
  valor: number;
  cpf: string;
  cartao: string;
  hora: string;
  donoLoja: string;
  nomeLoja: string;
}

interface TipoTransacao {
  tipo: number;
  descricao: string;
  natureza: 'ENTRADA' | 'SAIDA';
  sinal: '+' | '-';
}

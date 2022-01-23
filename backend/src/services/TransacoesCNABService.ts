export default class TransacoesCNABService {
  parse(registrosCNAB: string[]): Transacao[] {
    return registrosCNAB.reduce((registros: Transacao[], registro: string) => {
      if (registro) {
        registros.push(this.parseTransacaoCNAB(registro));
      }
      return registros;
    }, []);
  }

  private parseTransacaoCNAB = (line: string): Transacao => {
    const tipo = line.substring(0, 1).trim();
    const data = line.substring(1, 9).trim();
    const valor = line.substring(9, 19).trim();
    const cpf = line.substring(19, 30).trim();
    const cartao = line.substring(30, 42).trim();
    const hora = line.substring(42, 48).trim();
    const donoLoja = line.substring(48, 62).trim();
    const nomeLoja = line.substring(62, 81).trim();

    return {
      tipo: Number(tipo),
      data: this.stringToDateTime(data, hora),
      valor: this.stringToMoneyAmount(valor),
      cpf,
      cartao,
      hora: this.formatTimeString(hora),
      donoLoja,
      nomeLoja,
    };
  };

  private stringToDateTime(date: string, time: string): Date {
    const formattedDate = this.formatDateString(date);
    const formattedTime = this.formatTimeString(time);

    return new Date(`${formattedDate} ${formattedTime} GMT-0300`);
  }

  private formatDateString(date: string) {
    const [, year, month, day] = date.match(
      /(\d{4})(\d{2})(\d{2})/,
    ) as RegExpMatchArray;

    return `${year}-${month}-${day}`;
  }

  private formatTimeString(time: string): string {
    const [, hours, minutes, seconds] = time.match(
      /(\d{2})(\d{2})(\d{2})/,
    ) as RegExpMatchArray;
    return `${hours}:${minutes}:${seconds}`;
  }

  /**
   * Converts money amount from string to a numeric type by offsetting the two decimal places
   */
  stringToMoneyAmount = (amount: string): number => {
    return Number(amount) / 100;
  };
}

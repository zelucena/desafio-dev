import BootstrapTable from "react-bootstrap-table-next";
import { format } from "date-fns";

const columns = [
  {
    dataField: "tipoTransacao.descricao",
    text: "Tipo",
  },
  {
    dataField: "dataOcorrencia",
    text: "Data",
    formatter: (data) => format(new Date(data), "dd/MM/yyyy HH:mm:ss"),
  },
  {
    dataField: "valorMovimentacao",
    text: "Valor",
    formatter: (valor) =>
      valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" }),
  },
  {
    dataField: "cpfBeneficiario",
    text: "CPF",
  },
  {
    dataField: "numeroCartao",
    text: "Cartão",
  },
  {
    dataField: "donoLoja",
    text: "Dono da loja",
  },
  {
    dataField: "nomeLoja",
    text: "Nome da loja",
  },
];

const TabelaTransacoes = ({ transacoes = [] }) => (
  <BootstrapTable
    keyField="id"
    data={transacoes}
    columns={columns}
    striped
    hover
    condensed
  />
);

export default TabelaTransacoes;

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import BootstrapTable from "react-bootstrap-table-next";
import { format } from "date-fns";
import { Row, Col, Form } from "react-bootstrap";

const TransacoesForm = () => {
  const [transacoes, setTransacoes] = useState([]);
  console.log(transacoes);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const { get, post, response, loading, error, request } = useFetch(
    "http://localhost:3333",
    { cachePolicy: "no-cache" }
  );

  const fetchTransacoes = async () => {
    const payload = await get("/cnab");
    if (response.ok) {
      setTransacoes(payload);
    }
  };

  const postTransacoes = async (payload) => {
    const formData = new FormData();
    formData.append("cnab", payload.cnab[0]);
    console.log(request.cache);
    const responseBody = await post("/cnab", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.ok) {
      resetField("cnab");
      setTransacoes(responseBody);
    }
  };

  //   useEffect(() => {
  //     fetchTransacoes();
  //   }, []);

  const columns = [
    {
      dataField: "tipoTransacaoId",
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

  return (
    <>
      <form
        onSubmit={handleSubmit(postTransacoes)}
        encType="multipart/form-data"
        method="post"
      >
        <Row className="mb-4">
          <Col>
            <Form.Control
              type="file"
              defaultValue=""
              {...register("cnab")}
              required
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
          </Col>
          <Col lg={3}>
            <Form.Control
              type="submit"
              value={loading ? "Aguarde" : "Enviar"}
            />
          </Col>
        </Row>
        <Row>
          <BootstrapTable
            keyField="id"
            data={transacoes}
            columns={columns}
            striped
            hover
            condensed
          />
        </Row>
      </form>
    </>
  );
};

export default TransacoesForm;

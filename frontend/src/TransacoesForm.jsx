import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import { Row, Col, Form } from "react-bootstrap";
import TabelaTransacoes from "./TabelaTransacoes";

const TransacoesForm = () => {
  const [transacoes, setTransacoes] = useState([]);
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const { get, post, response, loading } = useFetch(
    process.env.REACT_APP_API_HOST,
    {
      cachePolicy: "no-cache",
    }
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
    await post("/cnab", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    if (response.ok) {
      resetField("cnab");
      fetchTransacoes();
    }
  };

  useEffect(() => {
    fetchTransacoes();
  }, []);

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
          <TabelaTransacoes transacoes={transacoes} />
        </Row>
      </form>
    </>
  );
};

export default TransacoesForm;

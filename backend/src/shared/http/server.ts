import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(express.urlencoded());

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado na porta ${process.env.PORT}`);
});

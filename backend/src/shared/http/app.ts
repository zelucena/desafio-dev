import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import config from '../../config';
import routes from './routes';

config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(express.urlencoded());

app.use(routes);

export default app;

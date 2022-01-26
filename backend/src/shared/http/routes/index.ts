import { NextFunction, Request, Response, Router } from 'express';
import multer from 'multer';
import AppError from '../../errors/AppError';
import { getCNAB, postCNAB } from 'src/controllers/CNABController';

const routes = Router();
const upload = multer();

routes.get('/cnab', getCNAB);
routes.post('/cnab', upload.single('cnab'), postCNAB);

routes.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ status: 'error', message: error.message });
  }

  return res
    .status(500)
    .json({ status: 'error', message: 'Ocorreu um erro interno' });
});

export default routes;

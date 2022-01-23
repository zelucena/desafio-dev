import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { bufferToStringArray } from '../shared/util';
import TransacoesCNABService from '../services/TransacoesCNABService';

export const postCNAB = (req: Request, res: Response) => {
  if (req.file?.buffer) {
    const linhas = bufferToStringArray(req.file.buffer);
    const transacoesCNABService = new TransacoesCNABService();
    const transcoes = transacoesCNABService.parse(linhas);
    return res.json(transcoes);
  }

  return res
    .status(httpStatus.UNPROCESSABLE_ENTITY)
    .json({ message: 'Nenhum arquivo encontrado' });
};

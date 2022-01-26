import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { bufferToStringArray } from '../shared/util';
import TransacoesParser from '../modules/TransacoesParser';
import TransacaoService from 'src/services/TransacaoService';

export const postCNAB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.file?.buffer) {
    return res
      .status(httpStatus.UNPROCESSABLE_ENTITY)
      .json({ message: 'Nenhum arquivo encontrado' });
  }

  try {
    const linhas = bufferToStringArray(req.file.buffer);
    const transacoesCNABService = new TransacoesParser();
    const transacoes = transacoesCNABService.parse(linhas);

    const transacaoService = new TransacaoService();
    const entidades = await transacaoService.saveAll(transacoes);

    return res.json(entidades);
  } catch (e) {
    next(e);
  }
};

export const getCNAB = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const transacaoService = new TransacaoService();
    const transacaoes = await transacaoService.fetch();
    return res.json(transacaoes);
  } catch (e) {
    next(e);
  }
};

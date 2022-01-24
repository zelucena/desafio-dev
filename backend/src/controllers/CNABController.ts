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
    const entidades = await transacaoService.salvar(transacoes);

    return res.json(entidades);
  } catch (e) {
    console.log(e);
    next(e);
  }
};

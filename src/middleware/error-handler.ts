import { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';

export = (
  err: NodeJS.ErrnoException,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void => {
  console.log(err);
  if (createError.isHttpError(err)) {
    res
      .status(err.statusCode)
      .send({ code: err.statusCode, name: err.name, message: err.message });
  } else {
    res.status(500).send({
      code: 500,
      name: 'InternalServerError',
      message: 'Internal server error',
    });
  }
};

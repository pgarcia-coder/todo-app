import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { Controller } from '../common/controller.interface';

const plainValidationErrors = (errors: ValidationError[]): string[] => {
  return errors.flatMap((error) => {
    const children = error.children
      ? plainValidationErrors(error.children)
      : [];
    const constraints = error.constraints
      ? Object.values(error.constraints)
      : [];

    return constraints.concat(children);
  });
};

export = <T, R>({
    controller,
    type,
    successCode = 200,
  }: {
    controller: Controller<T, R>;
    type: { new (): T };
    successCode?: number;
  }) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const params = {
        ...req.params,
        ...req.query,
        body: req.body,
        headers: req.headers,
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const input: any = plainToClass(type, params);
      const validationErrors = await validate(input);

      if (validationErrors && validationErrors.length) {
        throw new createHttpError.BadRequest(
          plainValidationErrors(validationErrors).join(', ').concat('.')
        );
      }

      const response = await controller(input);

      if (!response) {
        throw new createHttpError.NotFound();
      }

      res.status(successCode).send(response);
      return next();
    } catch (error) {
      return next(error);
    }
  };

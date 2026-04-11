import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';

export function errorHandler(err: Error, req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ZodError) {
    req.log.warn({ issues: err.issues }, 'Validation error');
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Validation error',
      errors: err.flatten()
    });
  }

  req.log.error({ err }, 'Unhandled error');
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: 'Internal server error'
  });
}

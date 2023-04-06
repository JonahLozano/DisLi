import { NextFunction, Request, Response } from "express";
import { logger } from "../index";
import { EntityNotFoundError, QueryFailedError } from "typeorm";

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  logger.error(err.stack);

  switch (true) {
    case err instanceof EntityNotFoundError:
      res.status(404).send("The requested resource could not be found.");
      break;

    case err instanceof QueryFailedError:
      res.status(400).send("The resource you request already exists.");
      break;

    default:
      res.status(500).send("Something went wrong. Please try again later.");
      break;
  }
};

export { errorHandler };

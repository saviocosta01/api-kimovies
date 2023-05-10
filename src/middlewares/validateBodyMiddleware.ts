import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const validateBodyMiddleware =
  (schema: ZodTypeAny) =>
  async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const validated = schema.parse(req.body);
    req.body = validated;
    next();
  };

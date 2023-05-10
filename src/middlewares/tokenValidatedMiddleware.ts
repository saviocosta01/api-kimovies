import 'dotenv/config'
import { Request, Response } from "express";
import { NextFunction } from "express-serve-static-core";
import { AppError } from "../errors";
import jwt from "jsonwebtoken";

export const tokenValidated = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const authorization: string | undefined = req.headers.authorization;


  if (!authorization) {
    throw new AppError("Missing bearer token", 401);
  }
 
  const  [_bearer, token] = authorization.split(" ");
  
  jwt.verify(
    token,
    String(process.env.SECRET_KEY),
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError(error.message, 401);
      }

      res.locals.id = decoded.sub;
      res.locals.admin = decoded.admin
    }
  );

  return next()
};

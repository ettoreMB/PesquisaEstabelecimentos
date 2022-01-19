import { NextFunction, Request, Response } from "express";
import { AppError } from "@shared/errors/AppError";

import { verify } from 'jsonwebtoken'
import auth from "@config/auth";


interface IPayload {
  sub: string
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing');
  }
  const [, token] = authHeader.split(" ")

  try {
    const { sub: user_id } = verify(
      token, auth.secret_token
    ) as IPayload;

    req.user = user_id
    next();


  } catch {
    throw new AppError('Inavalid Token', 401);
  }
}
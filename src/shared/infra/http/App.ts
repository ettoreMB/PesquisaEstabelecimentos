import { AppError } from '@shared/errors/AppError';
import express, { Request, Response, NextFunction } from 'express';
import cors from "cors";

import "express-async-errors";
import 'reflect-metadata';
import 'dotenv/config';

import '@shared/container'

import createConnection from '@shared/infra/typeorm';

import { router } from './routes';

require('dotenv').config();

createConnection()
const app = express()

app.use(cors())
app.use(express.json())
app.use(router)


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    })
  }

  return res.status(500).json({
    message: `internal Server Error - ${err.message},`
  })
})

export { app }
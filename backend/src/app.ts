import cors from 'cors';
import express from 'express';
import pinoHttp from 'pino-http';
import { logger } from './config/logger';
import { apiRoutes } from './routes';
import { notFoundHandler } from './middlewares/not-found.middleware';
import { errorHandler } from './middlewares/error-handler.middleware';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(
  pinoHttp({
    logger,
    customLogLevel(_req, res, err) {
      if (err || res.statusCode >= 500) return 'error';
      if (res.statusCode >= 400) return 'warn';
      return 'info';
    }
  })
);

app.use(apiRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

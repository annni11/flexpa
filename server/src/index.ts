import express, { Express, NextFunction, Request, Response } from 'express';

import cors from 'cors';
import router from './routes/api';

const app: Express = express();

type ServerError = {
  log: string;
  status: number;
  message: { err: string };
};

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

// parse json
app.use(express.json());
// use cors
app.use(cors());
app.use('/api', router);

app.use(
  '/',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (err: ServerError, _req: Request, res: Response, _next: NextFunction) => {
    const defaultErr: ServerError = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
  },
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(404).send("Sorry can't find that page!");
});

export default app;

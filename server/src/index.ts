import express, { Express, NextFunction, Request, Response } from 'express';

import cors from 'cors';
import router from './routes/api';

const app: Express = express();

type ServerError = {
  log: string;
  status: number;
  message: { err: string };
};

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// parse json
app.use(express.json());
// use cors
app.use(cors());
app.use('/api', router);

app.use(
  '/',
  (err: ServerError, req: Request, res: Response, next: NextFunction) => {
    const defaultErr: ServerError = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
  },
);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Sorry can't find that page!");
});

export default app;

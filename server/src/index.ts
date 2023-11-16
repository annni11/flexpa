import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from './routes/api';

const app: Express = express();
const port = process.env.PORT;

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

app.use('/', (err: ServerError, req: Request, res: Response) => {
  const defaultErr: ServerError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on http://localhost:${port}`);
});

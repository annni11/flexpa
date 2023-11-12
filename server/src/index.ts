import express, { Express, Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import router from './routes/api';

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// parse json
app.use(express.json());
// use cors
app.use(cors());
app.use('/api', router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on http://localhost:${port}`);
});

import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World, TESTING!');
});

router.post('/test', (req: Request, res: Response) => {
  res.send('Hello There!');
});

export default router;

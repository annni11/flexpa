import express, { Request, Response, Router } from 'express';
import tokenController from '../controllers/tokenController';
const router: Router = express.Router();

router.post(
  '/token',
  tokenController.exchangeToken,
  (req: Request, res: Response) => {
    res.send('Token Received!');
  },
);

export default router;

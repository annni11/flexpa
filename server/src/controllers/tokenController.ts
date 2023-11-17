import { type Request, type Response, type NextFunction } from 'express';
import {
  TokenController,
  LinkExchangeResponse,
  FlexpaAccessToken,
} from '../types';
import 'dotenv/config';

const tokenController: TokenController = {
  exchangeToken: async (req: Request, res: Response, next: NextFunction) => {
    // get the token from the request body
    const publicToken: FlexpaAccessToken = req.body.publicToken;

    // get the secret key from the .env file
    const secretKey = process.env.FLEXPA_API_SECRET_KEY;

    try {
      const data = await fetch('https://api.flexpa.com/link/exchange', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          public_token: publicToken,
          secret_key: secretKey,
        }),
      });

      const { access_token: accessToken } =
        (await data.json()) as LinkExchangeResponse;

      res.locals.accessToken = accessToken;
    } catch (err) {
      return next({
        log: 'Express error handler caught in ExchangeToken: ' + err,
        status: 400,
        message: { err: 'An error occurred' },
      });
    }
    return next();
  },
  tokenRefresh: async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = res.locals.accessToken;
    const secretKey = process.env.FLEXPA_API_SECRET_KEY;
    try {
      const request = await fetch('https://api.flexpa.com/link/refresh', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          access_token: accessToken,
          secret_key: secretKey,
        }),
      });

      const { access_token: newAccessToken } =
        (await request.json()) as LinkExchangeResponse;
      res.locals.accessToken = newAccessToken;
    } catch (err) {
      return next({
        log: 'Express error handler caught in tokenRefresh: ' + err,
        status: 400,
        message: { err: 'An error occurred' },
      });
    }
    return next();
  },
};

export default tokenController;

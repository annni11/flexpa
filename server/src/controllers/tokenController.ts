import { type Request, type Response, type NextFunction } from 'express';
import 'dotenv/config';

interface TokenController {
  exchangeToken: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  intropectDecode: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  tokenRefresh: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

const tokenController: TokenController = {
  exchangeToken: async (req, res, next) => {
    // get the token from the request body
    const publicToken = req.body.publicToken;
    console.log('PUBLIC TOKEN!', publicToken);
    // get the secret key from the .env file
    const secretKey = process.env.FLEXPA_API_SECRET_KEY;
    console.log('SECRET KEY!', secretKey);
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

      const { access_token: accessToken, expires_in: expiresIn } =
        await data.json();

      console.log('THE COMBO!', accessToken, expiresIn);
      res.locals.accessToken = accessToken;
    } catch (err) {
      console.log(err);
    }
    next();
  },
  intropectDecode: async (req, res, next) => {
    const ACCESS_TOKEN = res.locals.accessToken;
    try {
      const request = await fetch('https://api.flexpa.com/link/introspect', {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      });

      const { jti, iat, sub, exp, state, endpoint } = await request.json();

      console.log('THE INTROSPECT!', jti, iat, sub, exp, state, endpoint);
      res.locals.patientID = endpoint.id;
    } catch (err) {
      console.log(err);
    }
    next();
  },
  tokenRefresh: async (req, res, next) => {
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

      const { access_token: newAccessToken, expires_in: expiresIn } =
        await request.json();
      console.log('THE REFRESH!', newAccessToken, expiresIn);
      res.locals.accessToken = newAccessToken;
    } catch (err) {
      console.log(err);
    }
    next();
  },
};

export default tokenController;

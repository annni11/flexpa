import { type Request, type Response, type NextFunction } from 'express';
import 'dotenv/config';

interface TokenController {
  exchangeToken: (
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
    } catch (err) {
      console.log(err);
    }
    next();
  },
};

export default tokenController;

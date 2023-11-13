import express, { type Request, type Response, type Router } from 'express';
import tokenController from '../controllers/tokenController';
import fhirController from '../controllers/fhirController';
const router: Router = express.Router();

router.post(
  '/profile',
  tokenController.exchangeToken,
  tokenController.intropectDecode,
  fhirController.getPatientProfile,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.patientProfile);
  },
);

export default router;

import express, { type Request, type Response, type Router } from 'express';
import tokenController from '../controllers/tokenController';
import fhirController from '../controllers/fhirController';
const router: Router = express.Router();

router.post(
  '/profile',
  tokenController.exchangeToken,
  fhirController.getPatientProfile,
  fhirController.getPatientEOB,
  (req: Request, res: Response) => {
    const patientAll = {
      profile: res.locals.patientProfile,
      eob: res.locals.patientEOB,
    };
    console.log('eob', patientAll.eob);
    res.status(200).json(patientAll);
  },
);

export default router;

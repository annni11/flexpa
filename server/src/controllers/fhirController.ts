import { type Request, type Response, type NextFunction } from 'express';
import 'dotenv/config';

interface FhirController {
  getPatientProfile: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

const fhirController: FhirController = {
  getPatientProfile: async (req, res, next) => {
    const accessToken = res.locals.accessToken;
    const patientID = res.locals.patientId;

    try {
      const request = await fetch(
        'https://api.flexpa.com/fhir/Patient/$PATIENT_ID',
        {
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${accessToken}`,
            'x-flexpa-raw': '1',
          },
        },
      );

      const response = await request.json();
      console.log('FHIR RESPONSE!', response);

      const patientProfile = {
        name: response.name[0].text,
        gender: response.gender,
        birthDate: response.birthDate,
        contact: response.telecom[0],
        address: response.address[0],
      };

      res.locals.patientProfile = patientProfile;
    } catch (err) {
      console.log(err);
    }
    next();
  },
};

export default fhirController;

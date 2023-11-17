import { type Request, type Response, type NextFunction } from 'express';
import {
  FhirController,
  PatientProfile,
  PatientEOBEntry,
  FlexpaAccessToken,
} from '../types';
import 'dotenv/config';

const fhirController: FhirController = {
  getPatientProfile: async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const accessToken: FlexpaAccessToken = res.locals.accessToken;
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

      const patientProfile: PatientProfile = {
        name: response.name[0].text || 'N/A',
        gender: response.gender || 'N/A',
        birthDate: response.birthDate || 'N/A',
        contact:
          {
            phone: response.telecom[0].value || 'N/A',
            email: response.telecom[1].value || 'N/A',
          } || 'N/A',
        address: {
          line: response.address[0].line || 'N/A',
          city: response.address[0].city || 'N/A',
          state: response.address[0].state || 'N/A',
          postalCode: response.address[0].postalCode || 'N/A',
        },
      };

      res.locals.patientProfile = patientProfile;
    } catch (err) {
      return next({
        log: 'Express error handler caught in getPatientProfile: ' + err,
        status: 400,
        message: { err: 'An error occurred' },
      });
    }
    return next();
  },
  getPatientEOB: async (req, res, next) => {
    const accessToken: FlexpaAccessToken = res.locals.accessToken;
    try {
      const request = await fetch(
        'https://api.flexpa.com/fhir/ExplanationOfBenefit?patient=$PATIENT_ID',
        {
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${accessToken}`,
            'x-flexpa-raw': '1',
          },
        },
      );

      const response = await request.json();
      console.log('response', response.entry[0]);

      const patientEOB = response.entry.map((entry: PatientEOBEntry) => {
        const obj = {
          status: entry.resource.status || 'N/A',
          use: entry.resource.use || 'N/A',
          insurer: entry.resource.insurer.display || 'N/A',
          provider: entry.resource.provider.display || 'N/A',
          prescription: entry.resource.prescription || 'N/A',
          facility: entry.resource.facility || 'N/A',
          outcome: entry.resource.outcome || 'N/A',
          createdDate: entry.resource.created || 'N/A',
        };
        return obj;
      });

      res.locals.patientEOB = patientEOB;
    } catch (err) {
      return next({
        log: 'Express error handler caught in getPatientEOB: ' + err,
        status: 400,
        message: { err: 'An error occurred' },
      });
    }
    return next();
  },
};

export default fhirController;

import { type Request, type Response, type NextFunction } from 'express';
import 'dotenv/config';

interface FhirController {
  getPatientProfile: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
  getPatientEOB: (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => Promise<void>;
}

interface PatientProfile {
  name: string;
  gender: string;
  birthDate: string;
  contact: {
    phone: string;
    email: string;
  };
  address: {
    line: string[];
    city: string;
    state: string;
    postalCode: string;
  };
  accessToken: string;
}

const fhirController: FhirController = {
  getPatientProfile: async (req, res, next) => {
    const accessToken = res.locals.accessToken;
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
      // console.log('FHIR RESPONSE!', response);

      const patientProfile: PatientProfile = {
        name: response.name[0].text,
        gender: response.gender,
        birthDate: response.birthDate,
        contact: {
          phone: response.telecom[0].value,
          email: response.telecom[1].value,
        },
        address: {
          line: response.address[0].line,
          city: response.address[0].city,
          state: response.address[0].state,
          postalCode: response.address[0].postalCode,
        },
        accessToken,
      };

      res.locals.patientProfile = patientProfile;
    } catch (err) {
      console.log(err);
    }
    next();
  },
  getPatientEOB: async (req, res, next) => {
    const accessToken = res.locals.accessToken;
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
      // console.log('EOB RESPONSE!', response);

      // const patientEOB = response.entry.map(entry => {
      //   insurer: entry.resource.insurer.display;
      //   provider: entry.resource.provider.display;
      //   prescription: entry.resource.prescription.display;
      //   facility: entry.resource.facility.display;
      //   outcome: entry.resource.outcome;
      //   paymentDate: entry.resource.payment.date;
      //   paymentAmount: entry.resource.payment.amount.value;
      // });

      const patientEOB = {
        provider: response.entry[0].resource.provider.display,
        prescription: response.entry[0].resource.prescription.display,
      };
      // console.log(patientEOB);
      res.locals.patientEOB = patientEOB;
    } catch (err) {
      console.log(err);
    }
    next();
  },
};

export default fhirController;

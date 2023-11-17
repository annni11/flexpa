import { type Request, type Response, type NextFunction } from 'express';

export interface FlexpaAccessToken {
  publicToken: string;
}

export interface TokenController {
  exchangeToken: (
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

export interface LinkExchangeResponse {
  access_token: string;
  expires_in: number;
}

export interface FhirController {
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

export interface PatientProfile {
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
}

export interface PatientEOBEntry {
  resource: {
    status: string;
    use: string;
    insurer: { display: string };
    provider: { display: string };
    prescription: string;
    facility: string;
    outcome: string;
    created: { created: string };
  };
}

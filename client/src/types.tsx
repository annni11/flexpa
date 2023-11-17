export interface FlexpaAccessToken {
  publicToken: string;
}

export interface LinkExchangeResponse {
  access_token: string;
  expires_in: number;
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
  map(
    arg0: (
      entry: PatientEOBEntry,
      i: number,
    ) => import('react/jsx-runtime').JSX.Element,
  ): unknown;

  status: string;
  use: string;
  insurer: string;
  provider: string;
  prescription: { display: string };
  facility: { display: string };
  outcome: string;
  created: string;
}

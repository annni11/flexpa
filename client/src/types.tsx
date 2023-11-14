export interface ProfileProps {
  data: {
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
  };
}

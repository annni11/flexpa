import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../components/ButtonComponent';
import { PatientEOBEntry, PatientProfile } from '@/types';

interface FlexpaConfig {
  publishableKey: string;
  onSuccess: (publicToken: string) => Promise<unknown>;
}
// Let Typescript know about the FlexpaLink object from the link script
declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
  open: () => Record<string, unknown>;
};

interface Props {
  setProfile: (profile: PatientProfile) => void;
  setEOB: (eob: PatientEOBEntry[]) => void;
}

function PatientAccess(props: Props) {
  const { setProfile, setEOB } = props;

  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_REACT_FLEXPA_PUBLISHABLE_KEY;
  const serverUrl = import.meta.env.VITE_REACT_SERVER_URL;

  useEffect(() => {
    FlexpaLink.create({
      publishableKey: apiKey,
      onSuccess: async publicToken => {
        // Send `publicToken` to your backend to exchange it for a patient `access_token`
        // https://www.flexpa.com/docs/sdk/login#exchange

        try {
          const res = await fetch(`${serverUrl}/api/profile`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ publicToken }),
          });
          const data = await res.json();

          setProfile(data.profile);
          setEOB(data.eob);
          navigate('/profile');
        } catch (error) {
          console.log('an error occurred');
        }
      },
    });
  }, []);
  return (
    <div className='flex flex-col pt-40 gap-10'>
      <h1>Welcome, get started here:</h1>
      <ButtonComponent />
    </div>
  );
}

export default PatientAccess;

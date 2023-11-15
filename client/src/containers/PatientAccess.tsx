import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../components/Button';
import { useState, useEffect } from 'react';

interface FlexpaConfig {
  publishableKey: string;
  onSuccess: (publicToken: string) => Promise | unknown;
}
// Let Typescript know about the FlexpaLink object from the link script
declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
  open: () => Record<string, unknown>;
};

function PatientAccess(props) {
  const { profile, setProfile, eob, setEOB } = props;

  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_REACT_FLEXPA_PUBLISHABLE_KEY;
  const serverUrl = import.meta.env.VITE_REACT_SERVER_URL;

  console.log('FETCHING'),
    useEffect(() => {
      FlexpaLink.create({
        // Replace with your publishable key
        publishableKey: apiKey,
        onSuccess: async publicToken => {
          // Send `publicToken` to your backend to exchange it for a patient `access_token`
          // https://www.flexpa.com/docs/sdk/login#exchange
          console.log('publicToken: ', publicToken);
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

            console.log('THIS IS profile', profile);
            console.log('THIS IS eob', eob);
            navigate('/profile');
          } catch (err) {
            console.log(err);
          }
        },
      });
    }, []);
  return (
    <div className='pt-40'>
      <ButtonComponent />
    </div>
  );
}

export default PatientAccess;

interface FlexpaConfig {
  publishableKey: string;
  onSuccess: (publicToken: string) => Promise | unknown;
}
// Let Typescript know about the FlexpaLink object from the link script
declare const FlexpaLink: {
  create: (config: FlexpaConfig) => Record<string, unknown>;
  open: () => Record<string, unknown>;
};

function PatientAccess() {
  const apiKey = import.meta.env.VITE_REACT_FLEXPA_PUBLISHABLE_KEY;
  const serverUrl = import.meta.env.VITE_REACT_SERVER_URL;
  console.log(serverUrl);
  console.log(apiKey);
  let response = null;
  console.log('FETCHING'),
    FlexpaLink.create({
      // Replace with your publishable key
      publishableKey: apiKey,
      onSuccess: async publicToken => {
        // Send `publicToken` to your backend to exchange it for a patient `access_token`
        // https://www.flexpa.com/docs/sdk/login#exchange
        console.log('publicToken: ', publicToken);
        try {
          response = await fetch(`${serverUrl}/api/profile`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ publicToken }),
          });
          const data = await response.json();
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      },
    });

  return (
    <button onClick={() => FlexpaLink.open()}>Connect your health data</button>
  );
}

export default PatientAccess;

import { useEffect, useState } from 'react';
import { ProfileProps } from '@/types';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation } from 'react-router-dom';

function Profile(props) {
  const { profile } = props;
  // const [profileState, setProfileState] = useState([]);
  // const profile = useLocation();
  console.log('THIS IS PROFILE', profile);

  //setProfileState(profile.state.data);

  // console.log('this is profile state~~', profileState);
  // useEffect(() => {
  //   setProfileState(profile.state);
  // }, []);

  //console.log('THIS IS PROFILE STATE', profileState);

  return (
    <div className='flex flex-col gap-5'>
      <h1>hello</h1>
      {/* <Card>
        <CardHeader>
          <CardTitle>Hello, {name}</CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Patient Info:</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Full Name: {name}</li>
            <li>DOB: {birthDate}</li>
            <li>Gender: {gender}</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Info:</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>Phone: {contact.phone}</li>
            <li>Email: {contact.email}</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Address:</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            <li>{address.line}</li>
            <li>{address.city}</li>
            <li>{address.state}</li>
            <li>{address.postalCode}</li>
          </ul>
        </CardContent>
      </Card> */}
    </div>
  );
}
export default Profile;

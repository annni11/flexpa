import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PatientProfile } from '@/types';

function Profile(props: { profile: PatientProfile }) {
  const { profile } = props;

  const { name, gender, contact, birthDate, address } = profile;

  return (
    <div className='flex flex-col gap-5 py-28'>
      <Card>
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
          {contact ? (
            <ul>
              <li>Phone: {contact.phone}</li>
              <li>Email: {contact.email}</li>{' '}
            </ul>
          ) : (
            <ul>
              <li>Phone: N/A</li>
              <li>Email: N/A</li>
            </ul>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Address:</CardTitle>
        </CardHeader>
        <CardContent>
          {address ? (
            <ul>
              <li>{address.line}</li>
              <li>{address.city}</li>
              <li>{address.state}</li>
              <li>{address.postalCode}</li>
            </ul>
          ) : (
            <ul>
              <li>Address: N/A</li>
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
export default Profile;

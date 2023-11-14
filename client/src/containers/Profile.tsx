import { ProfileProps } from '@/types';

function Profile(props: ProfileProps) {
  console.log('THIS IS PROPS', props);
  const { name, gender } = props.data;
  console.log('name and gender from PROFILE:', name, gender);

  return (
    <div>
      <h1>Hello, {name}</h1>
      <h2>gender: {gender}</h2>
    </div>
  );
}
export default Profile;

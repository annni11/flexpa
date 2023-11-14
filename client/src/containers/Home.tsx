import { useLocation } from 'react-router-dom';
import Profile from './Profile';

function Home() {
  const location = useLocation();
  const state = location.state as Record<string, unknown>;
  console.log('state from HOME:', state);
  return (
    <div className='Home'>
      <Profile {...state} />
    </div>
  );
}

export default Home;

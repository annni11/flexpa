import Profile from './Profile';
import EOB from './EOB';
import App from '../App';
import Nav from '../components/NavBar';
import { Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div className='Home'>
      <Nav />

      <Routes>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/eob' element={<EOB />}></Route>
        <Route path='/' element={<App />}></Route>
      </Routes>
    </div>
  );
}

export default Home;

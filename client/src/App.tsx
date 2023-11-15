import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import PatientAccess from './containers/PatientAccess';
import Profile from './containers/Profile';
import EOB from './containers/EOB';
import { ProfileProps } from './types';

function App() {
  const [profile, setProfile] = useState({} as ProfileProps);
  const [eob, setEOB] = useState([]) as any;

  return (
    <div className='flex flex-col'>
      <NavBar />

      <Routes>
        <Route
          path='/'
          element={
            <PatientAccess
              profile={profile}
              setProfile={setProfile}
              setEOB={setEOB}
            />
          }
        />
        <Route path='/profile' element={<Profile profile={profile} />} />
        <Route path='/eob' element={<EOB />} />
      </Routes>
    </div>
  );
}

export default App;

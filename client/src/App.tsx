import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import PatientAccess from './containers/PatientAccess';
import Profile from './containers/Profile';
import EOB from './containers/EOB';
import Footer from './components/Footer';

import { PatientProfile, PatientEOBEntry } from './types';

function App() {
  const [profile, setProfile] = useState({} as PatientProfile);
  const [eob, setEOB] = useState([] as PatientEOBEntry[]);

  return (
    <div className='flex flex-col '>
      <NavBar />
      <Footer />
      <Routes>
        <Route
          path='/'
          element={<PatientAccess setProfile={setProfile} setEOB={setEOB} />}
        />
        <Route path='/profile' element={<Profile profile={profile} />} />
        <Route path='/eob' element={<EOB eob={eob} />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

//Routes
import App from './App';
// import EOB from './containers/EOB';
// import Home from './Home';
// import Profile from './containers/Profile';

// import LandingPage from './LandingPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

// <Routes>
// <Route element={<LandingPage />}>
//   <Route path='/' element={<App />} />
// </Route>
// <Route element={<Home />}>
//   {/* <Route path='/main' element={<Nav />} /> */}
//   <Route path='/profile' element={<Profile />} />
//   <Route path='/eob' element={<EOB />} />
// </Route>
// </Routes>

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import EOB from './containers/EOB';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Nav from './containers/Nav';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Outlet />}>
          <Route path='/' element={<App />} />
        </Route>

        <Route element={<Nav />}>
          <Route path='/home' element={<Home />} />
          <Route path='/eob' element={<EOB />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

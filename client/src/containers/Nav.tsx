import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Nav() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Nav;

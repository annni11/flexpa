import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='fixed top-0 left-0 bg-blue-700'>
      <Link to='/profile'>Profile</Link>
      <Link to='/eob'>Explaination of Benefits</Link>
      <Link to='/'>Start Over</Link>
    </nav>
  );
}

export default NavBar;

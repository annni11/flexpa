import { GithubIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='flex flex-row justify-center gap-5 fixed bottom-0 left-0 w-screen p-2 bg-[#DDD5c3]'>
      Flexpa Work Sample
      <Link to={'https://github.com/annni11/flexpa'} target='_blank'>
        <GithubIcon />
      </Link>
    </div>
  );
}

export default Footer;

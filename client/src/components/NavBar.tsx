import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { LogOut, User, FileText, MenuIcon, ChevronDown } from 'lucide-react';

function NavBar() {
  const [menu, setMenu] = useState(<MenuIcon />);
  return (
    <nav
      className='flex flex-row justify-between fixed top-0 left-0 w-screen py-4 px-10 z-50'
      style={{
        backgroundImage: 'url(https://os.flexpa.com/assets/Brand-pattern.png)',
      }}>
      <div>
        <img
          src='https://os.flexpa.com/assets/Brand-logo-full.png'
          alt='logo'
          width={150}
          height={50}
        />
      </div>

      <div className='pt-2'>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              onMouseEnter={() => setMenu(<ChevronDown />)}
              onMouseLeave={() => setMenu(<MenuIcon />)}>
              {menu}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mr-2'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link to='/profile'>
              <DropdownMenuItem>
                <User className='mr-2 h-4 w-4' />
                Profile
              </DropdownMenuItem>
            </Link>
            <Link to='/eob'>
              <DropdownMenuItem>
                <FileText className='mr-2 h-4 w-4' />
                Explaination of Benefits
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link to='/'>
              <DropdownMenuItem>
                <LogOut className='mr-2 h-4 w-4' />
                Start Over
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default NavBar;

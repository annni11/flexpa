import { Link } from 'react-router-dom';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { LogOut, User, FileText } from 'lucide-react';

function NavBar() {
  return (
    <nav className='flex flex-row justify-between fixed top-0 left-0 w-screen p-12'>
      <div>
        <img
          src='https://os.flexpa.com/assets/Brand-logo-full.png'
          alt='logo'
          width={150}
          height={50}
        />
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant='secondary'>Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mr-2'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className='mr-2 h-4 w-4' />
              <Link to='/profile'>Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileText className='mr-2 h-4 w-4' />
              <Link to='/eob'>Explaination of Benefits</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className='mr-2 h-4 w-4' />
              <Link to='/'>Start Over</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default NavBar;

import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

function ButtonComponent() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setButtonClicked(true);
    FlexpaLink.open();
  };
  return (
    <div>
      {!buttonClicked ? (
        <Button onClick={onClick}>Connect your health data</Button>
      ) : (
        <Button disabled>
          <Loader2 className='mr-2 h-4 w-8 animate-spin' />
          Please wait
        </Button>
      )}
    </div>
  );
}

export default ButtonComponent;

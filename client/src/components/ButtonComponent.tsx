import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';

declare const FlexpaLink: any;

function ButtonComponent() {
  const [buttonClicked, setButtonClicked] = useState(false);
  const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setButtonClicked(true);
    FlexpaLink.open();
  };
  return (
    <div>
      {!buttonClicked ? (
        <div>
          <Button onClick={onClick}>Connect your health data</Button>
        </div>
      ) : (
        <div>
          <Button disabled>
            <Loader2 className='mr-2 h-4 w-8 animate-spin' />
            Please wait
          </Button>
        </div>
      )}
    </div>
  );
}

export default ButtonComponent;

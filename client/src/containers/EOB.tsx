import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { create } from 'domain';

function EOB(props) {
  const { eob } = props;

  const eobRender = eob.map((entry, i) => {
    const { insurer, provider, prescription, facility, createdDate, outcome } =
      entry;
    return (
      <Accordion key={i} type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>{provider}</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>{provider}</CardTitle>
                <CardDescription>{insurer}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul>
                  <li>Created Date: {createdDate}</li>
                  <li>Prescription: {prescription.display}</li>
                  <li>Facility: {facility.display}</li>
                </ul>
              </CardContent>
              <CardFooter>Outcome: {outcome}</CardFooter>
            </Card>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  });

  return (
    <div className='py-28'>
      <h1>Choose a provider:</h1>
      {eobRender}
    </div>
  );
}

export default EOB;

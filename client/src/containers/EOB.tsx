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
import { Separator } from '@/components/ui/separator';

import { PatientEOBEntry } from '@/types';

function EOB(props: { eob: PatientEOBEntry[] }) {
  const { eob } = props;

  const eobRender = eob.map((entry: PatientEOBEntry, i: number) => {
    const {
      status,
      use,
      insurer,
      provider,
      prescription,
      facility,
      created,
      outcome,
    } = entry;
    return (
      <Accordion key={i} type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>{provider}</AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardHeader>
                <CardTitle>{provider}</CardTitle>
                <CardDescription>Insurer: {insurer}</CardDescription>
              </CardHeader>
              <Separator />
              <CardContent className='pt-5'>
                <ul>
                  <li>Status: {status}</li>
                  <li>Use: {use}</li>
                  <li>Created Date: {created}</li>
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

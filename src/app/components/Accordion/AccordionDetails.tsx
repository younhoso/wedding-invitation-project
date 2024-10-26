import { ReactNode } from 'react';

import clsx from 'clsx';

import { AccordionDetailsStyled } from './styled';

type AccordionDetailsProps = {
  children: ReactNode;
};

export default function AccordionDetails({ children }: AccordionDetailsProps) {
  return (
    <AccordionDetailsStyled className={clsx('accordionDetails')}>{children}</AccordionDetailsStyled>
  );
}

import { ReactNode } from 'react';

import clsx from 'clsx';

import { AccordionSummaryStyled } from './styled';

type AccordionSummaryProps = {
  handleToggle: () => void;
  children: ReactNode;
};

export default function AccordionSummary({ handleToggle, children }: AccordionSummaryProps) {
  return (
    <AccordionSummaryStyled onClick={handleToggle} className={clsx('accordionSummary')}>
      {children}
    </AccordionSummaryStyled>
  );
}

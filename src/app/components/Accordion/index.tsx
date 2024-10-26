import { ReactNode, useId, useState } from 'react';

import clsx from 'clsx';

import AccordionDetails from './AccordionDetails';
import AccordionSummary from './AccordionSummary';
import { AccordionStyled } from './styled';

type AccordionProps = {
  label: string;
  children: ReactNode;
};

export default function Accordion({ label, children }: AccordionProps) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  console.log(id);

  const handleToggle = () => {
    setExpanded(prev => !prev);
  };

  return (
    <AccordionStyled className={clsx('accordion', expanded && 'isOpen')}>
      <AccordionSummary handleToggle={handleToggle}>
        <div className="accordionHeader">{label}</div>
        <IconArrowDown className={clsx('ico-arraw-down')} />
      </AccordionSummary>
      <AccordionDetails>
        <div className="accordionDetails">{children}</div>
      </AccordionDetails>
    </AccordionStyled>
  );
}

function IconArrowDown({ className }: { className: string }) {
  return (
    <svg className={className} version="1.1" viewBox="0 0 512 512">
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  );
}

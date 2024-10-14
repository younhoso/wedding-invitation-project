import { ReactNode } from 'react';

import clsx from 'clsx';

import { SectionsStyled } from './styled';

type SectionProps = {
  children?: ReactNode;
  className?: string;
  title?: ReactNode;
};

export default function Sections({ className, children, title }: SectionProps) {
  return (
    <SectionsStyled className={clsx('Section', className)}>
      {title && <div className="txt-title">{title}</div>}
      {children}
    </SectionsStyled>
  );
}

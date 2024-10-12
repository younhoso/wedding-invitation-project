import { ReactNode } from 'react';

import clsx from 'clsx';

import { SectionsStyled } from './styled';

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Sections({ className, children }: SectionProps) {
  return <SectionsStyled className={clsx('Section', className)}>{children}</SectionsStyled>;
}

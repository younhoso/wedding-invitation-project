import { ReactNode } from 'react';

import clsx from 'clsx';

import { SectionsStyled } from './styled';

type SectionProps = {
  children: ReactNode;
};

export default function Sections({ children }: SectionProps) {
  return <SectionsStyled className={clsx('Section')}>{children}</SectionsStyled>;
}

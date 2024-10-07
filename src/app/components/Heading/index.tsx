import { format, getDay, parseISO } from 'date-fns';

import Sections from '@/app/components/Sections';

import { HeadingStyled } from './styled';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function Heading({ date }: { date: string }) {
  const weddingDate = date && parseISO(date);

  return (
    <HeadingStyled>
      <Sections className="heading">
        <div className="txt-date">{format(weddingDate, 'yy.MM.dd')}</div>
        <div className="txt-day">{DAYS[getDay(weddingDate)]}</div>
      </Sections>
    </HeadingStyled>
  );
}

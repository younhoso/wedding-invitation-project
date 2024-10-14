import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import clsx from 'clsx';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';

import Sections from '../Sections';
import { CalenderStyled } from './styled';

const css = `
  .rdp-nav {
    display: none
  }

  .rdp-day {
    font-size: 14px;
    font-weight: bold;
  }
  .rdp-today {
    color: #000 !important;
  }
  .rdp-day_button {
    cursor: default;
  }

  .rdp-selected .rdp-day_button {
    border: 1px solid red;
    background-color: red;
    color: #fff;
  }
`;

export default function Calender({ date }: { date: string }) {
  const weddingDate = parseISO(date);

  return (
    <CalenderStyled className={clsx('calender')}>
      <Sections
        title={
          <>
            <div className={'txt-date'}>{format(weddingDate, 'yyyy.MM.dd')}</div>
            <div className={'txt-time'}>{format(weddingDate, 'aaa h시 eeee', { locale: ko })}</div>
          </>
        }
      />
      <div className="wrapCalendar">
        <style>{css}</style>
        <DayPicker
          mode="single"
          locale={ko}
          selected={weddingDate}
          formatters={{
            formatCaption: () => '',
          }}
        />
      </div>
    </CalenderStyled>
  );
}

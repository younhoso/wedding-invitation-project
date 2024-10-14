'use client';

import styled from 'styled-components';

export const CalenderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  text-align: center;

  .txt-date {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .txt-time {
    font-size: 15px;
    font-weight: 500;
  }

  .wrapCalendar {
    display: flex;
    justify-content: center;
  }
`;

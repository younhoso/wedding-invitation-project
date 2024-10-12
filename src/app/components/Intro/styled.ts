'use client';

import styled from 'styled-components';

import { txtContent } from '@/styles/theme';

export const IntroStyled = styled.div`
  ${txtContent.center}

  .wrap-persons {
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: 42px 0 8px;
  }

  .wrap-location {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }

  .ico-flower {
    width: 24px;
    height: 24px;
    margin-bottom: 6px;
  }
`;

export const IconHeartSvgStyled = styled.svg`
  fill: red;
  width: 16px;
  height: 16px;
  margin: 0 6px;
`;

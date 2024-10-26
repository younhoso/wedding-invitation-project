'use client';

import styled from 'styled-components';

export const ContactStyled = styled.div``;

export const ContactInfoStyled = styled.div`
  display: flex;
  padding: 8px;

  .contactInfoTxt {
    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: 1.3;
  }

  .contactInfoBtn {
    .button {
      width: 52px;
      height: 24px;
      border: 1px solid ${props => props.theme.colors.black};
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background-color: #fff;
      font-weight: 400;
      margin-bottom: 6px;
      box-sizing: border-box;
      color: ${props => props.theme.colors.black};
      cursor: pointer;
    }
  }
`;

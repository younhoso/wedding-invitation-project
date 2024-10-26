'use client';

import styled from 'styled-components';

export const AccordionStyled = styled.div`
  + .accordion {
    margin-top: 8px;
  }
  .ico-arraw-down {
    width: 20px;
    height: 20px;
  }

  .accordionDetails {
    display: none;
  }
  &.isOpen {
    .ico-arraw-down {
      transform: rotate(-180deg);
    }

    .accordionDetails {
      display: block;
    }
  }
`;

export const AccordionSummaryStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.theme.colors.grayada};
  border-radius: 6px;
  padding: 10px;
`;

export const AccordionDetailsStyled = styled.div`
  padding: 0;
`;

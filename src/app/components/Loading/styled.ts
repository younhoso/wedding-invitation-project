import styled from 'styled-components';

export const LoadingStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 60px;
    height: 60px;
    fill: red;
  }
`;

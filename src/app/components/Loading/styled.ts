import styled from 'styled-components';

export const LoadingStyled = styled.div`
  @keyframes heart {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    38% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }

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
    animation: heart 1.2s infinite linear;
  }
`;

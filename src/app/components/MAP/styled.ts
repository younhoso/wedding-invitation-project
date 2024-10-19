import styled from 'styled-components';

import { colors } from './../../../styles/theme';

export const MapStyled = styled.div`
  position: relative;

  .wrapHeader {
    display: flex;
    flex-direction: column;

    .txtTitle {
      margin-bottom: 16px;
    }
    .txtSubtitleInner {
      margin-bottom: 10px;
      .txtSubtitle {
        font-weight: 400;
        font-size: 15px;
      }
    }
  }

  .mapContainer {
    width: 100%;
    height: 250px;
    position: relative;
  }

  .btn-find-way {
    border: 1px solid #000;
    padding: 8px 32px;
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    background-color: #fff;
    color: #000;
    text-decoration: none;
    border-radius: 32px;
  }

  .wrap-waytocome {
    margin: 16px 0;
    line-height: 1.3;

    .txt-label {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }
`;

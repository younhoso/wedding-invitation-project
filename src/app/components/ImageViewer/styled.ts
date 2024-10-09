'use client';

import styled from 'styled-components';

export const ImageViewerStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  z-index: 999;

  .swiper,
  .swiper-wrapper {
    height: 100% !important;
    width: 100%;
    position: relative;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    left: 0;
    position: absolute;
    object-fit: contain;
  }
`;

export const CloseSvgButtonStyled = styled.svg`
  width: 40px;
  height: 40px;
  fill: #fff;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  cursor: pointer;
`;

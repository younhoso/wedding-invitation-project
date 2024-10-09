import { useState } from 'react';

import clsx from 'clsx';

import { ImagesProps } from '@/types/images';

import ImageViewer from '../ImageViewer';
import Sections from '../Sections';
import Title from '../Title';
import List from './list';
import { ImageGalleryStyled } from './styled';

export default function ImageGallery({ images }: ImagesProps) {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const open = selectedIdx > -1;

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx);
  };

  const handleClose = () => {
    setSelectedIdx(-1);
  };

  return (
    <ImageGalleryStyled>
      <Sections className="imageGallery">
        <Title className="txt-title">사진첩</Title>
        <ul className={clsx('wrap-images')}>
          {images.map((src, idx) => {
            return (
              <List
                key={idx}
                src={src}
                idx={idx}
                alt={'사진첩 이미지'}
                handleSelectedImage={handleSelectedImage}
                onClose={handleClose}
              />
            );
          })}
        </ul>
      </Sections>
      {open && <ImageViewer images={images} selectedIdx={selectedIdx} onClose={handleClose} />}
    </ImageGalleryStyled>
  );
}

import clsx from 'clsx';

import Sections from '../Sections';
import Title from '../Title';
import List from './list';
import { ImageGalleryStyled } from './styled';

export default function ImageGallery({images}:{images: string[]}) {
  return (
    <ImageGalleryStyled>
      <Sections className="imageGallery">
        <Title className='txt-title'>사진첩</Title>
        <ul className={clsx('wrap-images')}>
          {images.map((src, idx) => {
            return (
              <List src={src} alt={'사진첩 이미지'}/>
            )
          })}
        </ul>
      </Sections>
    </ImageGalleryStyled>
  );
}

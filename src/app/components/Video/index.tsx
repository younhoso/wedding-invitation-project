import clsx from 'clsx';

import Sections from '../Sections';
import { VideoStyled } from './styled';

export default function Video() {
  return (
    <VideoStyled>
      <Sections className={clsx('video')}>
        <video
          className="container"
          autoPlay={true}
          muted={true}
          loop={true}
          poster="/assets/poster.jpg"
        >
          <source src="/assets/main.mp4" type="video/mp4"></source>
        </video>
      </Sections>
    </VideoStyled>
  );
}

import clsx from 'clsx';

import Sections from '../Sections';

export default function Video() {
  return (
    <Sections className="video">
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
  );
}

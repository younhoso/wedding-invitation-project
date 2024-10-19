'use client';

import { useQuery } from '@tanstack/react-query';

import { customAxios } from '@/libs/customAxios';
import { Wedding } from '@/types';

import Calender from './components/Calender';
import Error from './components/Error/Error';
import Heading from './components/Heading';
import ImageGallery from './components/ImageGallery';
import Intro from './components/Intro';
import Invitation from './components/Invitation';
import Loading from './components/Loading';
import Map from './components/MAP';
import Video from './components/Video';

export default function HomePage() {
  const {
    data: weddingData,
    isFetching,
    error,
  } = useQuery<Wedding>({
    queryKey: ['homePage'],
    queryFn: () => customAxios().get('/wedding'),
  });

  if (isFetching) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = weddingData!.data;

  return (
    <div>
      <>
        <Heading date={date} />
        <Video />
        <Intro
          groomName={groom.name}
          brideName={bride.name}
          locationName={location.name}
          date={date}
          message={intro}
        />
        <Invitation message={invitation} />
        <ImageGallery images={galleryImages} />
        <Calender date={date} />
        <Map location={location} />
      </>
    </div>
  );
}

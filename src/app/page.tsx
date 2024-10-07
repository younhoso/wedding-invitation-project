'use client';

import { useQuery } from '@tanstack/react-query';

import { customAxios } from '@/libs/customAxios';
import { Wedding } from '@/types';

import Error from './components/Error/Error';
import Heading from './components/Heading';
import ImageGallery from './components/ImageGallery';
import Loading from './components/Loading';
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

  return (
    <div>
      <Heading date={weddingData?.data.date!} />
      <Video />
      <ImageGallery images={weddingData?.data.galleryImages!}/>
    </div>
  );
}

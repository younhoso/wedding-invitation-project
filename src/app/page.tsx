'use client';

import { useQuery } from '@tanstack/react-query';

import { customAxios } from '@/libs/customAxios';

import Error from './components/Error/Error';
import Loading from './components/Loading/Loading';

export default function HomePage() {
  const { data, isFetching, error } = useQuery({
    queryKey: ['homePage'],
    queryFn: () => customAxios().get('/wedding'),
  });

  if (isFetching) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return <div>{JSON.stringify(data)}</div>;
}

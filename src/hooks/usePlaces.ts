import { placesApi } from '@/api/placesApi';
import { Place } from '@/types/places';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export default function usePlaces() {
  return useQuery<Place[], AxiosError>({
    queryKey: ['places'],
    queryFn: placesApi.getPlaces,
  });
}

// 당장은 안 씀.
// 정렬 방식을 여러가지 중에 선택하는 기능을 추가하면 이게 기본 정렬.

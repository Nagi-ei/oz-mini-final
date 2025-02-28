import { placesApi } from '@/api/placesApi';
import { useQuery } from '@tanstack/react-query';

export default function usePlaces() {
  return useQuery({
    queryKey: ['places'],
    queryFn: placesApi.getPlaces,
  });
  // 에러 처리 어떡하지..?
}

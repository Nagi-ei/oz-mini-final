import { placesApi } from '@/api/placesApi';
import { useQuery } from '@tanstack/react-query';

export default function usePlaces() {
  return useQuery({
    queryKey: ['places'],
    queryFn: placesApi.getPlaces,
  });
  // 에러 처리를 여기서 하거나..? 아니면 받아서 에러 객체 까보고 하기
}

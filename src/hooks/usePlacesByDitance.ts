import { AxiosError } from 'axios';
import { locationApi } from '@/api/locationApi';
import { placesApi } from '@/api/placesApi';
import { sortPlacesByDistance } from '@/lib/loc';
import { useQueries, UseQueryResult } from '@tanstack/react-query';
import { Coordinate, Place } from '@/types/places';

export default function usePlacesByDitance() {
  const results = useQueries<
    [
      UseQueryResult<Coordinate, AxiosError>,
      UseQueryResult<Place[], AxiosError>
    ]
  >({
    queries: [
      {
        queryKey: ['currentLoaction'],
        queryFn: locationApi.getCurrentLocation,
      },
      {
        queryKey: ['places'],
        queryFn: placesApi.getPlaces,
      },
    ],
  });
  const [currentLocationQuery, placesQuery] = results;

  const isLoading = currentLocationQuery.isLoading || placesQuery.isLoading;
  const isError = currentLocationQuery.isError || placesQuery.isError;
  const error = {
    currentLocationError: currentLocationQuery.error,
    placesError: placesQuery.error,
  };

  if (isLoading) {
    return {
      placesbyDistance: null,
      isLoading,
      isError,
      error: null,
    };
  }

  // isSuccess 일때 .data가 무조건 undefined가 아니라는걸 타입스크립트는 모르는 듯. as를 안쓸수 없나
  if (currentLocationQuery.data && placesQuery.data) {
    const placesByDistance = sortPlacesByDistance(
      placesQuery.data,
      currentLocationQuery.data
    );
    return { placesByDistance, isLoading, isError, error: null };
  }

  // 여기서 다 에러 코드에 따른 출력할 메세지까지 다 셋팅해서 리턴해주는게 나을까?

  // 에러
  return {
    placesByDistance: null,
    isLoading,
    isError,
    error,
  };
}

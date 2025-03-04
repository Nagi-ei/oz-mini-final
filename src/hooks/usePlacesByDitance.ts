import { AxiosError } from 'axios';
import { locationApi } from '@/api/locationApi';
import { placesApi } from '@/api/placesApi';
import { sortPlacesByDistance } from '@/lib/loc';
import { UseQueryResult, useSuspenseQueries } from '@tanstack/react-query';
import { Coordinate, Place } from '@/types/places';
import { QUERY_KEYS } from '@/constants';

export default function usePlacesByDitance() {
  const results = useSuspenseQueries<
    [
      UseQueryResult<Coordinate, AxiosError>,
      UseQueryResult<Place[], AxiosError>
    ]
  >({
    queries: [
      {
        queryKey: [QUERY_KEYS.currentLocation],
        queryFn: locationApi.getCurrentLocation,
      },
      {
        queryKey: [QUERY_KEYS.places],
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
  // if 문 안에 있어서 sortPlaceByDistance를 useMemo로 메모이제이션 할 수 없음.
  if (currentLocationQuery.data && placesQuery.data) {
    const placesByDistance = sortPlacesByDistance(
      placesQuery.data,
      currentLocationQuery.data
    );
    return { placesByDistance, isLoading, isError, error: null };
  }

  // 에러
  return {
    placesByDistance: null,
    isLoading,
    isError,
    error,
  };
}

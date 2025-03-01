import { AxiosError } from 'axios';
import { locationApi } from '@/api/locationApi';
import { placesApi } from '@/api/placesApi';
import { sortPlacesByDistance } from '@/lib/loc';
import { useQueries } from '@tanstack/react-query';

export default function usePlacesByDitance() {
  const results = useQueries({
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
    currentLocationError: currentLocationQuery.error as AxiosError,
    placesError: placesQuery.error as AxiosError,
  };

  if (isLoading) {
    return {
      placesbyDistance: null,
      isLoading,
      isError,
      error: null,
    };
  }

  if (currentLocationQuery.isSuccess && placesQuery.isSuccess) {
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

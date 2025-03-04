import { favoritesApi } from '@/api/favoritesApi';
import { QUERY_KEYS } from '@/constants';
import { queryClient } from '@/main';
import { Place } from '@/types/places';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export function useGetFavorites() {
  return useSuspenseQuery<Place[], AxiosError>({
    queryKey: [QUERY_KEYS.favorites],
    queryFn: favoritesApi.getFavorites,
  });
}

export function usePostFavorites() {
  return useMutation({
    mutationFn: favoritesApi.postFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.favorites] });
    },
  });
}

export function useDeleteFavorites() {
  return useMutation({
    mutationFn: favoritesApi.deleteFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.favorites] });
    },
  });
}

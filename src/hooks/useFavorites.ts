import { favoritesApi } from '@/api/favoritesApi';
import { queryClient } from '@/main';
import { Place } from '@/types/places';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export function useGetFavorites() {
  return useQuery<Place[], AxiosError>({
    queryKey: ['favorites'],
    queryFn: favoritesApi.getFavorites,
  });
}

export function usePostFavorites() {
  return useMutation({
    mutationFn: favoritesApi.postFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
}

export function useDeleteFavorites() {
  return useMutation({
    mutationFn: favoritesApi.deleteFavorites,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] });
    },
  });
}

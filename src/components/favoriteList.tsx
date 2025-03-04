import { useDeleteFavorites, useGetFavorites } from '@/hooks/useFavorites';
import PlaceCard from './placeCard';

export default function FavoriteList() {
  const { data: favoritePlaces } = useGetFavorites();
  const deleteMutation = useDeleteFavorites();

  return (
    <ul className='flex flex-wrap gap-4 py-4 justify-center'>
      {favoritePlaces?.map((place) => (
        <PlaceCard
          key={place.id}
          place={place}
          deleteAction={deleteMutation}
          message={'삭제'}
        />
      ))}
    </ul>
  );
}

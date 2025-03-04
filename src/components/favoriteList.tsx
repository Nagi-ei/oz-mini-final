import { useDeleteFavorites, useGetFavorites } from '@/hooks/useFavorites';
import PlaceCard from './placeCard';
import { ActionType } from '@/types/places';

export default function FavoriteList() {
  const { data: favoritePlaces } = useGetFavorites();
  const deleteMutation = useDeleteFavorites();
  const deleteAction: ActionType = '삭제';

  return (
    <ul className='flex flex-wrap gap-4 py-4 justify-center'>
      {favoritePlaces?.map((place) => (
        <PlaceCard
          place={place}
          action={deleteMutation}
          type={deleteAction}
          key={place.id}
        />
      ))}
    </ul>
  );
}

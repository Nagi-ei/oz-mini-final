import PlaceCard from './placeCard';
import usePlacesByDitance from '@/hooks/usePlacesByDitance';
import { usePostFavorites } from '@/hooks/useFavorites';
import { ActionType } from '@/types/places';

export default function PlacesList() {
  const { placesByDistance } = usePlacesByDitance();
  const postMutation = usePostFavorites();
  const addAction: ActionType = '추가';

  return (
    <ul className='flex flex-wrap gap-4 py-4 justify-center'>
      {placesByDistance?.map((place) => (
        <PlaceCard
          place={place}
          action={postMutation}
          type={addAction}
          key={place.id}
        />
      ))}
    </ul>
  );
}

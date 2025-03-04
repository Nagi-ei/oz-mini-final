import PlaceCard from './placeCard';
import usePlacesByDitance from '@/hooks/usePlacesByDitance';
import { usePostFavorites } from '@/hooks/useFavorites';

export default function PlacesList() {
  const { placesByDistance } = usePlacesByDitance();
  const postMutation = usePostFavorites();

  return (
    <ul className='flex flex-wrap gap-4 py-4 justify-center'>
      {placesByDistance?.map((place) => (
        <PlaceCard
          place={place}
          postAction={postMutation}
          message='추가'
          key={place.id}
        />
      ))}
    </ul>
  );
}

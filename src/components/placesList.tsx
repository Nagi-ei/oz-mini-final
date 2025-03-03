import { AxiosError } from 'axios';
import PlaceCard from './placeCard';
import usePlacesByDitance from '@/hooks/usePlacesByDitance';
import { usePostFavorites } from '@/hooks/useFavorites';

export default function PlacesList() {
  const { placesByDistance, isLoading, isError, error } = usePlacesByDitance();
  const postMutation = usePostFavorites();

  if (isError) {
    return (
      <div className='text-center p-4 flex flex-col gap-4'>
        {/* 에러코드가 여러개 있음. 그거대로 처리하려면 커스텀훅에서 에러객체 리턴할때부터 수정해야할듯 */}
        {error?.currentLocationError instanceof AxiosError && (
          <>
            <p>위치 정보를 받아오는데 실패했습니다 🥲</p>
            <p>다시 시도해 주세요!</p>
          </>
        )}
        {/* undefined 여도 false 라서 상관없는데, 이 에러는 어떡하지? -> as number로 괜찮은건가...? // ? 너무 남발 */}
        {/* instanceof 를 써서 어떻게 못하나. as 안쓰고 싶은데 */}
        {(error?.placesError?.status as number) >= 500 && (
          <>
            <p>{`서버 오류가 발생했습니다. 나중에 다시 시도해주세요. ${error?.placesError?.status}`}</p>
            <p className='text-zinc-400'>{`에러: ${error?.placesError?.code} (${error?.placesError?.message})`}</p>
          </>
        )}
        {(error?.placesError?.status as number) < 500 && (
          <>
            <p>{`요청하신 데이터를 찾을 수 없습니다. ${error?.placesError?.status}`}</p>
            <p className='text-zinc-400'>{`에러: ${error?.placesError?.code} (${error?.placesError?.message})`}</p>
          </>
        )}
      </div>
    );
  }

  if (isLoading || !placesByDistance) {
    return <div className='text-center p-4'>데이터를 불러오는 중...</div>;
  }

  return (
    <ul className='flex flex-wrap gap-4 py-4 justify-center'>
      {placesByDistance.map((place) => (
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

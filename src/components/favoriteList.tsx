import { useDeleteFavorites, useGetFavorites } from '@/hooks/useFavorites';
import PlaceCard from './placeCard';

export default function FavoriteList() {
  const { data: favoritePlaces, isLoading, isError, error } = useGetFavorites();
  const deleteMutation = useDeleteFavorites();

  if (isError) {
    return (
      <div className='text-center p-4 flex flex-col gap-4'>
        {(error?.status as number) >= 500 && (
          <>
            <p>{`서버 오류가 발생했습니다. 나중에 다시 시도해주세요. ${error?.status}`}</p>
            <p className='text-zinc-400'>{`에러: ${error?.code} (${error?.message})`}</p>
          </>
        )}
        {(error?.status as number) < 500 && (
          <>
            <p>{`요청하신 데이터를 찾을 수 없습니다. ${error?.status}`}</p>
            <p className='text-zinc-400'>{`에러: ${error?.code} (${error?.message})`}</p>
          </>
        )}
      </div>
    );
  }

  if (isLoading) {
    return <div className='text-center p-4'>데이터를 불러오는 중...</div>;
  }

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

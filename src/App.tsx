import PlaceCard from './components/placeCard';
import usePlaces from './hooks/usePlaces';

export default function App() {
  const { data: places, isLoading, isError, error } = usePlaces();
  console.log(places);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.log(error);
    // 여기서 error.status 번호에 따라서 나눠서 처리
    // 근데 이러면 받아오는 컴포넌트 마다 따로 해야하니까 usePlaces에서 해서 넘겨줘야하나? 어떻게?
    return <div>{`에러: ${error.name} (${error.message})`}</div>;
  }

  return (
    <main className='p-4'>
      <h1 className='text-center text-3xl font-bold py-4 border-b'>
        맛집 목록
      </h1>
      <ul className='flex flex-wrap gap-4 py-4 justify-center'>
        {places?.map((place) => (
          <PlaceCard place={place} key={place.id} />
        ))}
      </ul>
    </main>
  );
}

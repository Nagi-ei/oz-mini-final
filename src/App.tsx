import PlacesList from './components/placesList';

export default function App() {
  return (
    <main className='p-4'>
      <h1 className='text-center text-3xl font-bold py-4 border-b'>
        맛집 목록
      </h1>
      <PlacesList />
    </main>
  );
}

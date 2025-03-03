import FavoriteList from './components/favoriteList';
import PlacesList from './components/placesList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';

export default function App() {
  return (
    <main className='p-4 flex flex-col items-center'>
      <h1 className='text-center w-full text-3xl font-bold py-4 border-b'>
        🍔 오늘 뭐 먹지? 🍕
      </h1>

      <Tabs
        defaultValue='list'
        className='w-full flex flex-col items-center py-4'
      >
        <TabsList className='grid w-1/2 grid-cols-2'>
          <TabsTrigger value='list'>맛집 목록</TabsTrigger>
          <TabsTrigger value='favorites'>찜한 목록</TabsTrigger>
        </TabsList>

        <TabsContent value='list'>
          <PlacesList />
        </TabsContent>

        <TabsContent value='favorites'>
          <FavoriteList />
        </TabsContent>
      </Tabs>
    </main>
  );
}

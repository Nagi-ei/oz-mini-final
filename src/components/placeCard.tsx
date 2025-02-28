import { BASE_URL } from '@/constants';
import { Place } from '@/types/places';

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <li className='w-80 h-80 relative'>
      <span className='absolute bottom-3 right-4 bg-zinc-400 rounded-xl py-1 px-2'>
        {place.title}
      </span>
      <img
        src={`${BASE_URL}/${place.image.src}`}
        alt={place.image.alt}
        className='w-full h-full object-cover'
      />
    </li>
  );
}

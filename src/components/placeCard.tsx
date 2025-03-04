import { BASE_URL } from '@/constants';
import { Action, ActionType, Place } from '@/types/places';
import React, { useCallback, useState } from 'react';
import Modal from './modal';

function PlaceCard({
  place,
  action,
  type,
}: {
  place: Place;
  action: Action;
  type: ActionType;
}) {
  const [isModalOn, setIsModalOn] = useState<boolean>(false);
  const offModal = useCallback(() => setIsModalOn(false), []);

  return (
    <>
      <li
        className='w-80 h-80 relative cursor-pointer'
        onClick={() => setIsModalOn(true)}
      >
        <span className='absolute bottom-3 right-4 bg-zinc-400 rounded-xl py-1 px-2'>
          {place.title}
        </span>
        <img
          src={`${BASE_URL}/${place.image.src}`}
          alt={place.image.alt}
          className='w-full h-full object-cover'
          draggable='false'
        />
      </li>
      {isModalOn && (
        <Modal offModal={offModal} place={place} action={action} type={type} />
      )}
    </>
  );
}

export default React.memo(PlaceCard);

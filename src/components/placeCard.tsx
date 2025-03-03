import { BASE_URL } from '@/constants';
import { Place } from '@/types/places';
import { useState } from 'react';
import Modal from './modal';
import { UseMutationResult } from '@tanstack/react-query';

export default function PlaceCard({
  place,
  postAction,
  deleteAction,
  message,
}: {
  place: Place;
  postAction?: UseMutationResult<string, Error, Place, unknown>;
  deleteAction?: UseMutationResult<void, Error, string, unknown>;
  message: string;
}) {
  const [isModalOn, setIsModalOn] = useState<boolean>(false);

  const offModal = () => setIsModalOn(false);

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
        <Modal
          offModal={offModal}
          place={place}
          postAction={postAction}
          deleteAction={deleteAction}
          message={message}
        />
      )}
    </>
  );
}

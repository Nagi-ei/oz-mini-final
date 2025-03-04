import { useCallback } from 'react';
import { Button } from './ui/button';
import {
  Action,
  ActionType,
  DeleteAction,
  Place,
  PostAction,
} from '@/types/places';

export default function Modal({
  offModal,
  place,
  action,
  type,
}: {
  offModal: () => void;
  place: Place;
  action: Action;
  type: ActionType;
}) {
  const handleAction = useCallback(() => {
    // as 안쓰고는 방법이 없나?
    switch (type) {
      case '추가':
        (action as PostAction).mutate(place);
        break;
      case '삭제':
        (action as DeleteAction).mutate(place.id);
        break;
    }
    offModal();
  }, [offModal, action, place, type]);

  return (
    <div
      onClick={offModal}
      className='w-screen h-screen bg-black/50 fixed top-0 left-0 flex justify-center items-center z-10'
    >
      <section
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='px-8 py-6 bg-white w-1/2 min-w-80 rounded'
      >
        <h2 className='text-xl font-bold pb-2'>확인</h2>
        <p className='pb-4'>{`${type}`} 하시겠습니까?</p>
        <div className='flex gap-3 justify-end'>
          <Button
            variant='secondary'
            onClick={offModal}
            className='cursor-pointer'
          >
            아니오
          </Button>
          <Button onClick={handleAction} className='cursor-pointer'>
            네
          </Button>
        </div>
      </section>
    </div>
  );
}

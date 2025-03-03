import { UseMutationResult } from '@tanstack/react-query';
import { Button } from './ui/button';
import { Place } from '@/types/places';

export default function Modal({
  offModal,
  place,
  postAction,
  deleteAction,
  message,
}: {
  offModal: () => void;
  place: Place;
  postAction?: UseMutationResult<string, Error, Place, unknown>;
  deleteAction?: UseMutationResult<void, Error, string, unknown>;
  message: string;
}) {
  // addModal, deleteModal로 나눠야하나.. 지저분함
  // 여기서 전역 상태를 사용할 순 없는건가?

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
        <p className='pb-4'>{`${message}`} 하시겠습니까?</p>
        <div className='flex gap-3 justify-end'>
          <Button
            variant='secondary'
            onClick={offModal}
            className='cursor-pointer'
          >
            아니오
          </Button>
          <Button
            onClick={() => {
              postAction?.mutate(place);
              deleteAction?.mutate(place.id);
              offModal();
            }}
            className='cursor-pointer'
          >
            네
          </Button>
        </div>
      </section>
    </div>
  );
}

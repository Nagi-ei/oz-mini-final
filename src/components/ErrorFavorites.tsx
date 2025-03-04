import { AxiosError } from 'axios';

export default function ErrorFavorites({ error }: { error: AxiosError }) {
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

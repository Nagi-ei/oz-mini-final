import { AxiosError } from 'axios';

export default function ErrorPlaces({ error }: { error: Error }) {
  if (error instanceof GeolocationPositionError) {
    return (
      <div className='text-center p-4 flex flex-col gap-4'>
        <p>위치 정보를 받아오는데 실패했습니다 🥲</p>
        <p>다시 시도해 주세요!</p>
        <p className='text-zinc-400'>{`에러: ${error.code} (${error.message})`}</p>
      </div>
    );
  }

  if (error instanceof AxiosError && error.status) {
    return (
      <div className='text-center p-4 flex flex-col gap-4'>
        {error.status >= 500 && (
          <>
            <p>{`서버 오류가 발생했습니다. 나중에 다시 시도해주세요. (응답 상태 코드: ${error.status})`}</p>
            <p className='text-zinc-400'>{`에러: ${error.code} (${error.message})`}</p>
          </>
        )}
        {error.status < 500 && (
          <>
            <p>{`요청하신 데이터를 찾을 수 없습니다. (응답 상태 코드: ${error.status})`}</p>
            <p className='text-zinc-400'>{`에러: ${error.code} (${error.message})`}</p>
          </>
        )}
      </div>
    );
  }
}

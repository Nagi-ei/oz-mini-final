import { Skeleton } from './ui/skeleton';

export default function LoadingSkeleton() {
  const arr = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {arr.map((n) => (
        <Skeleton className='h-80 w-80' key={n} />
      ))}
    </div>
  );
}

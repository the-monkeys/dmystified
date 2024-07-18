import { Skeleton } from '../ui/skeleton';

export const UpdateCourseFormSkeleton = () => {
  return (
    <div className='space-y-4'>
      <div className='pt-2 space-y-2'>
        <Skeleton className='h-4 w-1/4 rounded-full' />
        <Skeleton className='h-10 w-full rounded-lg' />
      </div>

      <div className='pt-2 space-y-2'>
        <Skeleton className='h-4 w-1/4 rounded-full' />
        <Skeleton className='h-10 w-full rounded-lg' />
      </div>

      <div className='pt-2 space-y-2'>
        <Skeleton className='h-4 w-1/4 rounded-full' />
        <Skeleton className='h-10 w-full rounded-lg' />
      </div>

      <div className='pt-2 space-y-2'>
        <Skeleton className='h-4 w-1/4 rounded-full' />
        <Skeleton className='h-16 w-full rounded-lg' />
      </div>

      <div className='pt-2 flex flex-wrap gap-4'>
        <Skeleton className='h-8 w-20 rounded-full' />
        <Skeleton className='h-8 w-20 rounded-full' />
      </div>

      <Skeleton className='mt-4 w-40 h-10 float-right' />
    </div>
  );
};

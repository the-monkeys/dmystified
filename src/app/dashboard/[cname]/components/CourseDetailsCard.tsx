'use client';

import { Badge } from '@/components/ui/badge';
import useCourseInfo from '@/hooks/useCourseInfo';
import { formatDate } from '@/utils/formatDate';

const CourseDetailsCard = ({ cname }: { cname: string }) => {
  const { course, isLoading } = useCourseInfo(cname);

  if (isLoading) return <p>loading...</p>;

  return (
    <div className='p-4 sm:p-6 border-1 border-gray-200 rounded-3xl'>
      <div className='mb-2 flex justify-end flex-wrap gap-1'>
        <Badge variant={course?.isLive ? 'live' : 'secondary'}>
          {course?.isLive ? 'Live' : 'Upcoming'}
        </Badge>

        {course?.onHold && <Badge>On Hold</Badge>}
      </div>

      <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl'>
        {course?.title}
      </h1>

      <p className='py-2 text-gray-800'>{course?.description}</p>

      <div className='mt-4 space-y-1'>
        <p className='text-sm text-gray-800'>
          Created On:{' '}
          <span className='font-medium'>
            {course?.createdAt ? formatDate(course?.createdAt) : 'NA'}
          </span>
        </p>

        <p className='text-sm text-gray-800'>
          Last Updated:{' '}
          <span className='font-medium'>
            {course?.updatedAt ? formatDate(course?.updatedAt) : 'NA'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CourseDetailsCard;

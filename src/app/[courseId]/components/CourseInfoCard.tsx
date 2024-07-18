'use client';

import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { courseList } from '@/constants/courses';

const CourseInfoCard = ({ courseName }: { courseName: string }) => {
  const course = courseList[courseName];
  const handleEnrollNowClick = () => {
    window.open('https://api.whatsapp.com/send?phone=9641118267', '_blank');
  };

  return (
    <div className='relative min-h-40 sm:min-h-52 p-4 sm:p-6 shadow-lg shadow-gray-200 rounded-2xl overflow-hidden'>
      {!course.isLive && (
        <div className='mb-4'>
          <p className='font-medium text-sm text-red-500 text-center'>
            The course you are trying to access is not live yet. Please check
            back later.
          </p>
        </div>
      )}

      <div className='mb-2 flex flex-wrap gap-1'>
        <Badge variant={course.isLive ? 'live' : 'secondary'}>
          {course.isLive ? 'Live' : 'Upcoming'}
        </Badge>
      </div>

      <div className='absolute p-4 top-0 right-0 w-fit h-28 sm:h-32 md:h-40 -z-10'>
        <Image
          src={course.imagePath || ''}
          alt={course.title}
          width={100}
          height={100}
          className='h-full w-full opacity-10'
        />
      </div>

      <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl'>
        {course?.title}
      </h1>

      <p className='py-2 text-sm sm:text-base text-gray-800'>
        {course?.description}
      </p>

      <div className='mt-4 space-y-1'>
        <p className='text-sm text-gray-800'>
          Duration: <span className='font-medium'>36 Hours</span>
        </p>

        <p className='text-sm text-gray-800'>
          Sections: <span className='font-medium'>5</span>
        </p>

        <p className='text-sm text-gray-800'>
          Created On: <span className='font-medium'>NA</span>
        </p>
      </div>

      <Button
        className='w-full mt-10 px-6'
        disabled={!course.isLive}
        onClick={handleEnrollNowClick}
      >
        Enroll Now
      </Button>

      <p className='mt-1 text-xs sm:text-sm text-gray-800 text-center'>
        Note: To enroll, contact us on WhatsApp
      </p>
    </div>
  );
};

export default CourseInfoCard;

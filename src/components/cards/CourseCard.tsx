import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CourseItem } from '@/constants/courses';

import Icon from '../icon';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const CourseCard: FC<{ course: CourseItem }> = ({ course }) => {
  return (
    <div className='col-span-2 sm:col-span-1 py-4 px-6 bg-gray-50 border-1 border-gray-100 rounded-3xl overflow-hidden'>
      <div className='flex justify-end gap-1'>
        <Badge variant={course.isLive ? 'live' : 'outline'}>
          {course.isLive ? 'Live' : 'Upcoming'}
        </Badge>
      </div>

      <div className='my-2 w-fit h-10'>
        <Image
          src={course.imagePath || ''}
          alt={course.title}
          width={100}
          height={100}
          className='w-full h-full'
        />
      </div>

      <h2 className='py-1 text-lg font-medium'>{course.title}</h2>

      <div className='space-y-1'>
        <p className='text-sm'>
          Duration:{' '}
          <span className='font-medium'>
            {course.durationInHours ? `${course.durationInHours} Hours` : 'NA'}
          </span>
        </p>

        <p className='text-sm'>
          Medium:{' '}
          <span className='font-medium'>
            {course.medium ? course.medium : 'NA'}
          </span>
        </p>
      </div>

      <Button
        className='group w-full mt-6 rounded-full'
        variant='outline'
        asChild
      >
        <Link href={`/${course.id}`}>
          Course Details{' '}
          <div className='mx-2 group-hover:ml-3 group-hover:mr-1 transition-all'>
            <Icon name='RiArrowRight' size={16} />
          </div>
        </Link>
      </Button>
    </div>
  );
};

export default CourseCard;

import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CourseItem } from '@/constants/courses';

import Icon from '../icon';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const CourseCard: FC<{ course: CourseItem }> = ({ course }) => {
  return (
    <div className='col-span-2 sm:col-span-1 px-4 sm:px-6 py-2 sm:py-4 border-1 border-gray-100 bg-gray-50 rounded-3xl overflow-hidden'>
      <div className='mb-2 sm:mb-4 flex justify-end flex-wrap gap-1'>
        <Badge variant={course.isLive ? 'live' : 'secondary'}>
          {course.isLive ? 'Live' : 'Upcoming'}
        </Badge>
      </div>

      <div className='w-fit h-8 sm:h-12'>
        <Image
          src={course.imagePath || ''}
          alt={course.title}
          width={100}
          height={100}
          className='h-full w-full'
        />
      </div>

      <h2 className='py-2 text-xl sm:text-2xl font-medium'>{course.title}</h2>

      <p className='text-sm truncate'>{course.description}</p>

      <Button
        className='w-full mt-6 group rounded-full'
        variant='outline'
        size='sm'
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

import { FC } from 'react';

import Link from 'next/link';

import Icon from '@/components/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate } from '@/utils/formatDate';

import DeleteCourseDialog from './dialogs/DeleteCourseDialog';
import UpdateCourseDialog from './dialogs/UpdateCourseDialog';

type Course = {
  id: string;
  cname: string;
  title: string;
  description: string;
  isLive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type CourseTableProps = {
  courses: Course[] | undefined;
};

const CourseTable: FC<CourseTableProps> = ({ courses }) => {
  return (
    <Table className='mt-2 rounded-lg overflow-hidden'>
      {courses && courses.length === 0 && (
        <TableCaption>No course available.</TableCaption>
      )}

      <TableHeader>
        <TableRow className='bg-gray-50'>
          <TableHead>Name</TableHead>
          <TableHead>Title</TableHead>
          <TableHead className='text-center'>Status</TableHead>
          <TableHead className='text-center'>Last Updated</TableHead>
          <TableHead className='text-center'>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {courses?.map((course, index) => {
          return (
            <TableRow key={course.id}>
              <TableCell className='max-w-[100px]'>
                <p className='truncate'>{course.cname}</p>
              </TableCell>

              <TableCell className='min-w-[250px] max-w-[300px]'>
                <p className='w-fit'>{course.title}</p>

                <p className='text-sm text-gray-600 truncate'>
                  {course.description}
                </p>
              </TableCell>

              <TableCell className='text-center'>
                <Badge variant={course.isLive ? 'default' : 'outline'}>
                  {course.isLive ? 'Live' : 'Upcoming'}
                </Badge>
              </TableCell>

              <TableCell className='text-center'>
                <p className='truncate'>{formatDate(course.updatedAt)}</p>
              </TableCell>

              <TableCell>
                <div className='flex justify-center'>
                  <UpdateCourseDialog
                    id={course.id}
                    cname={course.cname}
                    title={course.title}
                    updatedAt={course.updatedAt}
                  />

                  <DeleteCourseDialog
                    id={course.id}
                    cname={course.cname}
                    title={course.title}
                  />

                  <Button
                    variant='ghost'
                    size='icon'
                    className='rounded-full'
                    asChild
                  >
                    <Link href={`/dashboard/${course.cname}`}>
                      <Icon name='RiArrowRightUp' size={18} />
                    </Link>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default CourseTable;

import { FC } from 'react';

import Link from 'next/link';

import Icon from '@/components/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import DeleteCourseDialog from './DeleteCourseDialog';
import EditCourseDialog from './EditCourseDialog';

type Course = {
  id: string;
  cname: string;
  title: string;
  description: string;
  isLive: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type CoursesTableProps = {
  courses: Course[] | undefined;
};

const CoursesTable: FC<CoursesTableProps> = ({ courses }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead className='min-w-[250px] w-1/2'>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className='text-center'>Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {courses?.map((course, index) => {
          return (
            <TableRow key={course.id}>
              <TableCell>
                <p>{course.cname}</p>
              </TableCell>

              <TableCell>
                <p className='w-fit'>{course.title}</p>

                <p className='text-sm text-gray-600 line-clamp-1'>
                  {course.description}
                </p>
              </TableCell>

              <TableCell>
                <Badge variant='outline' className='rounded-md'>
                  Upcoming
                </Badge>
              </TableCell>

              <TableCell>
                <div className='flex justify-center'>
                  <EditCourseDialog
                    id={course.id}
                    cname={course.cname}
                    title={course.title}
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
                    <Link
                      href={`/dashboard/admin/${course.cname}?id=${course.id}`}
                    >
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

export default CoursesTable;

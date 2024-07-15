import { FC } from 'react';

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
                  <Button variant='ghost' size='icon' className='rounded-full'>
                    <Icon name='RiEdit' size={18} />
                  </Button>

                  <Button variant='ghost' size='icon' className='rounded-full'>
                    <Icon name='RiDeleteBin6' size={18} />
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

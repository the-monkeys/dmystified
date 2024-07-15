import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Skeleton } from '../ui/skeleton';

const CourseTableSkeleton = () => {
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
        <TableRow>
          <TableCell>
            <Skeleton className='h-5' />
          </TableCell>
          <TableCell>
            <Skeleton className='w-1/2 h-5' />
            <Skeleton className='mt-1 h-3' />
          </TableCell>
          <TableCell>
            <Skeleton className='h-5' />
          </TableCell>
          <TableCell>
            <div className='flex justify-center gap-1'>
              <Skeleton className='size-10 rounded-full' />
              <Skeleton className='size-10 rounded-full' />
              <Skeleton className='size-10 rounded-full' />
            </div>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Skeleton className='h-5' />
          </TableCell>
          <TableCell>
            <Skeleton className='w-1/2 h-5' />
            <Skeleton className='mt-1 h-3' />
          </TableCell>
          <TableCell>
            <Skeleton className='h-5' />
          </TableCell>
          <TableCell>
            <div className='flex justify-center gap-1'>
              <Skeleton className='size-10 rounded-full' />
              <Skeleton className='size-10 rounded-full' />
              <Skeleton className='size-10 rounded-full' />
            </div>
          </TableCell>
        </TableRow>

        <TableRow>
          <TableCell>
            <Skeleton className='h-5' />
          </TableCell>
          <TableCell>
            <Skeleton className='w-1/2 h-5' />
            <Skeleton className='mt-1 h-3' />
          </TableCell>
          <TableCell>
            <Skeleton className='h-5' />
          </TableCell>
          <TableCell>
            <div className='flex justify-center gap-1'>
              <Skeleton className='size-10 rounded-full' />
              <Skeleton className='size-10 rounded-full' />
              <Skeleton className='size-10 rounded-full' />
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CourseTableSkeleton;

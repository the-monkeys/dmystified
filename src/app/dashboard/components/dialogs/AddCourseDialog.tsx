'use client';

import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import AddCourseForm from '../forms/AddCourseForm';

const AddCourseDialog = () => {
  return (
    <Dialog>
      <div className='my-2 flex justify-end'>
        <DialogTrigger asChild>
          <Button
            size='sm'
            className='px-4 text-white bg-orange hover:bg-orange/90'
          >
            Course
            <Icon name='RiAdd' className='ml-2' />
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Course</DialogTitle>
        </DialogHeader>

        <AddCourseForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddCourseDialog;

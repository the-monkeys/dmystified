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
      <DialogTrigger asChild>
        <div className='my-2 flex justify-end'>
          <Button className='text-white bg-orange hover:bg-orange/80'>
            New <Icon name='RiAdd' />
          </Button>
        </div>
      </DialogTrigger>

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

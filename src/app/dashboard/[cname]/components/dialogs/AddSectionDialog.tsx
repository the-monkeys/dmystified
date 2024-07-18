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

import AddCourseForm from '../forms/AddSectionForm';

const AddSectionDialog = ({ cname }: { cname: string }) => {
  return (
    <Dialog>
      <div className='my-2 flex justify-end'>
        <DialogTrigger asChild>
          <Button
            size='sm'
            className='px-4 text-white bg-orange hover:bg-orange/90'
          >
            Section
            <Icon name='RiAdd' className='ml-2' />
          </Button>
        </DialogTrigger>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Section</DialogTitle>
        </DialogHeader>

        <AddCourseForm cname={cname} />
      </DialogContent>
    </Dialog>
  );
};

export default AddSectionDialog;

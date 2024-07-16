'use client';

import { useState } from 'react';

import Icon from '@/components/icon';
import { Loader } from '@/components/loader';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';

import { deleteCourseAction } from '../../actions';

const DeleteCourseDialog = ({
  id,
  cname,
  title,
}: {
  id: string;
  cname: string;
  title: string;
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    setLoading(true);

    try {
      const response = await deleteCourseAction({ id });

      if (response.status) {
        toast({
          title: 'Success',
          description: response.message,
        });
        setLoading(false);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: response.message,
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An error occurred while deleting the course.',
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full hover:text-red-600'
        >
          <Icon name='RiDeleteBin6' size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogHeader className='text-red-500 overflow-hidden'>
            <DialogTitle className='py-1 pr-4 truncate'>
              Delete &apos;{title}&apos;
            </DialogTitle>

            <DialogDescription className='text-red-400'>
              Course Name: {cname}
            </DialogDescription>
          </DialogHeader>
        </DialogHeader>

        <p>
          Are you sure you want to delete the course?
          <br />
          <span className='font-medium'>Alternatively</span>, you can change the
          course status to &apos;On Hold&apos;.
        </p>

        <p className='text-sm'></p>

        <div className='pt-4 flex justify-end'>
          <Button
            variant='destructive'
            disabled={loading}
            onClick={handleDelete}
          >
            {loading && <Loader />}
            Yes, Delete Course
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCourseDialog;

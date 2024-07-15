import Icon from '@/components/icon';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const DeleteCourseDialog = ({
  id,
  cname,
  title,
}: {
  id: string;
  cname: string;
  title: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full hover:text-red-500'
        >
          <Icon name='RiDeleteBin6' size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogHeader className='text-red-500 overflow-hidden'>
            <DialogTitle className='py-1 pr-4 truncate'>
              Delete {title}
            </DialogTitle>
          </DialogHeader>
        </DialogHeader>

        <p className='mb-4 leading-tight'>
          Are you sure you want to delete this course? This action cannot be
          undone.
        </p>

        <Button variant='destructive' size='sm'>
          Yes, Delete Course
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteCourseDialog;

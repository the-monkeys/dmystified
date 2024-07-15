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

const EditCourseDialog = ({
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
          className='rounded-full hover:text-green-500'
        >
          <Icon name='RiEdit' size={18} />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className='overflow-hidden'>
          <DialogTitle className='py-1 pr-4 truncate'>Edit {title}</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditCourseDialog;

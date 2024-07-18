import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Loader } from '@/components/loader';
import { UpdateCourseFormSkeleton } from '@/components/skeleton/formSkeleton';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import useCourseInfo from '@/hooks/useCourseInfo';
import { updateCourseSchema } from '@/lib/schema/course';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { updateCourseAction } from '../../actions';

const UpdateCourseForm = ({
  id,
  cname,
  setOpen,
}: {
  id: string;
  cname: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { course, isLoading } = useCourseInfo(cname);

  const form = useForm<z.infer<typeof updateCourseSchema>>({
    resolver: zodResolver(updateCourseSchema),
    defaultValues: {
      cname: '',
      title: '',
      description: '',
      imagePath: '',
      isLive: false,
      onHold: false,
    },
  });

  useEffect(() => {
    if (course) {
      form.reset({
        cname: course.cname || '',
        title: course.title || '',
        description: course.description || '',
        imagePath: course.imagePath || '',
        isLive: course.isLive || false,
        onHold: course.onHold || false,
      });
    }
  }, [course, form]);

  const onSubmit = async (values: z.infer<typeof updateCourseSchema>) => {
    setLoading(true);

    try {
      const response = await updateCourseAction({ id, ...values });

      if (response.status) {
        toast({
          title: 'Success',
          description: response.message,
        });
        setOpen(false);
      } else {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: response.message,
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'An error occurred while updating the course.',
      });
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return <UpdateCourseFormSkeleton />;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-2 gap-4'
      >
        <FormField
          control={form.control}
          name='cname'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Name</FormLabel>

              <ul className='px-2 pb-2 list-decimal list-inside'>
                <li className='text-sm text-gray-600'>
                  Should be in format name_name_YY (e.g. golang_24)
                </li>

                <li className='text-sm text-gray-600'>
                  Contain only lowercase letters
                </li>
              </ul>

              <FormControl>
                <Input placeholder='Enter course name' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Title</FormLabel>

              <FormControl>
                <Input placeholder='Enter course title' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='imagePath'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Image Path</FormLabel>

              <FormControl>
                <Input placeholder='Enter image path' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem className='col-span-2'>
              <FormLabel>Description</FormLabel>

              <FormControl>
                <Textarea placeholder='Enter course description' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='isLive'
          render={({ field }) => (
            <FormItem className='col-span-2 sm:col-span-1'>
              <FormLabel>Go Live</FormLabel>

              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className='block'
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='onHold'
          render={({ field }) => (
            <FormItem className='col-span-2 sm:col-span-1'>
              <FormLabel>On Hold</FormLabel>

              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className='block'
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className='col-span-2 pt-4 flex justify-end'>
          <Button type='submit' disabled={loading}>
            {loading && <Loader />}
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateCourseForm;

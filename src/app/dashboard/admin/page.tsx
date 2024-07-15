'use client';

import Image from 'next/image';

import Icon from '@/components/icon';
import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import CourseTableSkeleton from '@/components/skeleton/CourseTableSkeleton';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import useSWR from 'swr';

import DashboardImage from '../../../../public/dashboard.svg';
import { getCoursesAction } from './actions';
import AddCourseForm from './components/AddCourseForm';
import CoursesTable from './components/CoursesTable';

const AdminDashboard = () => {
  const { data: courses, isLoading } = useSWR(
    'getAllCourses',
    getCoursesAction
  );

  return (
    <Container className='min-h-screen'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='cursor-default'>
              Dashboard
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Section className='my-2 flex flex-col items-center'>
        <h1 className='font-medium text-2xl sm:text-3xl md:text-4xl text-center'>
          <span className='font-medium text-orange'>Admin</span> Dashboard
        </h1>

        <Image
          src={DashboardImage}
          alt='Dashboard Page'
          width={150}
          height={150}
          className='size-48 sm:size-52 md:size-56'
        />
      </Section>

      <Section className='my-2'>
        <h3 className='font-semibold text-xl sm:text-2xl'>Courses</h3>

        <Dialog>
          <DialogTrigger asChild>
            <div className='my-2 flex justify-end'>
              <Button
                size='sm'
                className='text-white bg-orange hover:bg-orange/80'
              >
                {' '}
                Add
                <Icon name='RiAdd' />
              </Button>
            </div>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Course Details</DialogTitle>
            </DialogHeader>

            <AddCourseForm />
          </DialogContent>
        </Dialog>

        {isLoading ? (
          <CourseTableSkeleton />
        ) : (
          <CoursesTable courses={courses} />
        )}
      </Section>
    </Container>
  );
};

export default AdminDashboard;

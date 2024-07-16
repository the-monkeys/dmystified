import { Metadata } from 'next';
import Image from 'next/image';

import Container from '@/components/layout/Container';
import Section from '@/components/layout/Section';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import DashboardImage from '../../../public/dashboard.svg';
import Courses from './components/Courses';
import AddCourseDialog from './components/dialogs/AddCourseDialog';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Dashboard | Dmystified`,
    description:
      'Manage and monitor administrative tasks efficiently with the Dmystified admin dashboard. Track analytics, manage users, and oversee content seamlessly.',
  };
}

const AdminDashboard = () => {
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
        <h3 className='px-2 sm:px-4 font-semibold text-xl sm:text-2xl'>
          Courses
        </h3>

        <AddCourseDialog />

        <Courses />
      </Section>
    </Container>
  );
};

export default AdminDashboard;

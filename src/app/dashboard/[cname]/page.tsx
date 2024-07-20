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
import { Separator } from '@/components/ui/separator';

import CourseDetails from './components/CourseDetails';
import Sections from './components/Sections';
import AddSectionDialog from './components/dialogs/AddSectionDialog';

const DashboardCoursePage = ({
  params,
}: {
  params: {
    cname: string;
  };
}) => {
  return (
    <Container className='min-h-screen space-y-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/dashboard'>Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='font-medium cursor-default'>
              {params.cname}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <CourseDetails cname={params.cname} />

      <Separator />

      <Section className='space-y-2'>
        <h3 className='font-medium text-xl sm:text-2xl'>Sections</h3>

        <AddSectionDialog cname={params.cname} />

        <Sections cname={params.cname} />
      </Section>
    </Container>
  );
};

export default DashboardCoursePage;

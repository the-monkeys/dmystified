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

import CourseDetailsCard from './components/CourseDetailsCard';
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
            <BreadcrumbPage className='font-medium text-orange cursor-default'>
              {params.cname}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <CourseDetailsCard cname={params.cname} />

      <Section className='my-2'>
        <h3 className='px-2 sm:px-4 font-semibold text-xl sm:text-2xl'>
          Sections
        </h3>

        <AddSectionDialog cname={params.cname} />
      </Section>
    </Container>
  );
};

export default DashboardCoursePage;

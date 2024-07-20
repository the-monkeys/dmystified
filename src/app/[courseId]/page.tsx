import { Metadata } from 'next';

import Container from '@/components/layout/Container';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getCourseByCname } from '@/data-access/courses';
import getMdxComponent from '@/utils/getMdxComponent';

import CourseInfoCard from './components/CourseInfoCard';

export async function generateMetadata({
  params,
}: {
  params: { courseId: string };
}): Promise<Metadata> {
  const course = await getCourseByCname(params.courseId);

  return {
    title: `${course?.title} | Dmystified`,
    description: course?.description,
  };
}

export default async function CoursePage({
  params,
}: {
  params: {
    courseId: string;
  };
}) {
  const course = await getCourseByCname(params.courseId);

  const MdxComponent = await getMdxComponent(course?.cname);

  return (
    <Container className='min-h-screen space-y-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='font-medium cursor-default'>
              {course?.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <CourseInfoCard course={course} />

      {course?.status === 'Live' && (
        <div className='px-4 py-2 flex flex-col gap-4'>
          <h2 className='self-center px-6 py-2 font-medium text-xl sm:text-2xl border-b-1 border-gray-200'>
            Course <span className='font-semibold text-orange'>Curriculum</span>
          </h2>

          {MdxComponent && <MdxComponent />}
        </div>
      )}
    </Container>
  );
}

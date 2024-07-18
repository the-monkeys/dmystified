import { Metadata } from 'next';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { courseList } from '@/constants/courses';
import getMdxComponent from '@/utils/getMdxComponent';

import CourseInfoCard from './components/CourseInfoCard';

export async function generateMetadata({
  params,
}: {
  params: { courseId: string };
}): Promise<Metadata> {
  const course = courseList[params.courseId];

  return {
    title: `${course.title} | Dmystified`,
    description: course.description,
  };
}

export default async function CoursePage({
  params,
}: {
  params: {
    courseId: string;
  };
}) {
  const course = courseList[params.courseId];

  const MdxComponent = await getMdxComponent(course.id);

  return (
    <div className='mx-auto mb-6 sm:mb-8 max-w-7xl px-4 lg:px-8 pt-4 min-h-screen space-y-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='font-medium text-orange cursor-default'>
              {course.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <CourseInfoCard courseName={course.id} />

      {MdxComponent && (
        <div className='px-4 py-2 flex flex-col gap-4'>
          <h2 className='self-center px-6 py-2 font-medium text-xl sm:text-2xl border-b-1 border-gray-200'>
            Course <span className='font-semibold text-orange'>Curriculum</span>
          </h2>

          <MdxComponent />
        </div>
      )}
    </div>
  );
}

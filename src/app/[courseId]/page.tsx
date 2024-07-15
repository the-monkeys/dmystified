import { Metadata, ResolvingMetadata } from 'next';

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

import CourseInfo from './components/CourseInfo';

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
    <div className='mx-auto mb-6 sm:mb-8 max-w-7xl px-4 lg:px-8 pt-4 min-h-screen space-y-6'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='cursor-default'>
              {course.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <CourseInfo courseName={course.id} />

      {MdxComponent && (
        <div className='mt-10 px-4 flex flex-col gap-4'>
          <h4 className='self-center px-6 py-2 font-medium text-xl sm:text-2xl border-b-1 border-gray-200'>
            Course <span className='font-semibold text-orange'>Curriculum</span>
          </h4>

          <MdxComponent />
        </div>
      )}
    </div>
  );
}

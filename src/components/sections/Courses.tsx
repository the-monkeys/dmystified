import { courseList } from '@/constants/courses';

import CourseCard from '../cards/CourseCard';
import Section from '../layout/Section';

const Courses = () => {
  return (
    <Section id='courses' className='mb-10 sm:mb-12'>
      <div className='mb-6 w-full text-center cursor-default'>
        <h2 className='py-2 font-medium text-2xl sm:text-3xl md:text-4xl'>
          <span className='font-medium text-orange'>Courses</span> we offer
        </h2>

        <p className='max-w-xl leading-relaxed text-gray-800 text-sm md:text-base mx-auto'>
          Tailor Your Learning with Our Vast Course Selection
        </p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
        {Object.values(courseList).map((course) => {
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
    </Section>
  );
};

export default Courses;

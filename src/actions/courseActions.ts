import { getAllCourses, getCourseInfo } from '@/data-access/courses';

export const getCoursesAction = async () => {
  const allCourses = await getAllCourses();

  return allCourses;
};

export const getCourseInfoAction = async (cname: string) => {
  const courseInfo = await getCourseInfo(cname);

  return courseInfo;
};

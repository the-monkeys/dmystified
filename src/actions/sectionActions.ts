import { getAllSections } from '@/data-access/sections';

export const getSectionsAction = async (courseId: string) => {
  const allCourses = await getAllSections(courseId);

  return allCourses;
};

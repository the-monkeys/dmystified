'use server';

import { getAllSections } from '@/data-access/sections';

export const getAllSectionsAction = async (cname: string) => {
  const allCourses = await getAllSections(cname);

  return allCourses;
};

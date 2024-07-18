'use server';

import { getCourseByCname } from '@/data-access/courses';
import { db } from '@/db';
import { SectionTable } from '@/db/schema';

export const addSectionAction = async ({
  cname,
  title,
  description,
}: {
  cname: string;
  title: string;
  description: string;
}) => {
  try {
    const existingCourse = await getCourseByCname(cname);

    if (!existingCourse) {
      return {
        status: false,
        message: 'Course not found.',
      };
    }

    await db.insert(SectionTable).values({
      title,
      description,
      courseId: existingCourse.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {
      status: true,
      message: 'Section added successfully.',
    };
  } catch (error) {
    console.error('Error adding section:', error);

    return {
      status: false,
      message: `Error adding section to the course.`,
    };
  }
};

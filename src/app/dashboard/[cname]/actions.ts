'use server';

import { getCourseByCname } from '@/data-access/courses';
import { getSectionById } from '@/data-access/sections';
import { db } from '@/db';
import { SectionTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

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

export const deleteSectionAction = async ({ id }: { id: number }) => {
  try {
    const existingSection = await getSectionById(id);

    if (!existingSection) {
      return {
        status: false,
        message: 'Section not found.',
      };
    }

    const deletedSection = await db
      .delete(SectionTable)
      .where(eq(SectionTable.id, existingSection.id))
      .returning({ title: SectionTable.title });

    return {
      status: true,
      message: `Section ${deletedSection[0].title} deleted successfully.`,
    };
  } catch (error) {
    console.error('Error deleting section:', error);

    return {
      status: false,
      message: `Error deleting the section.`,
    };
  }
};

export const updateSectionAction = async ({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) => {
  try {
    const existingSection = await getSectionById(id);

    if (!existingSection) {
      return {
        status: false,
        message: 'Section not found.',
      };
    }

    await db
      .update(SectionTable)
      .set({
        title,
        description,
        updatedAt: new Date(),
      })
      .where(eq(SectionTable.id, id))
      .returning({
        title: SectionTable.title,
      });

    return {
      status: true,
      message: 'Section updated successfully.',
    };
  } catch (error) {
    console.error('Error updating the section:', error);

    return {
      status: false,
      message: `Error updating the section.`,
    };
  }
};

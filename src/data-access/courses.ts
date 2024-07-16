'use server';

import { db } from '@/db';
import { CourseTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getAllCourses() {
  const courses = await db.select().from(CourseTable);

  return courses;
}

export async function getCourseInfo(cname: string) {
  const course = await db
    .select({
      id: CourseTable.id,
      cname: CourseTable.cname,
      title: CourseTable.title,
      description: CourseTable.description,
      isLive: CourseTable.isLive,
    })
    .from(CourseTable)
    .where(eq(CourseTable.cname, cname));

  return course;
}

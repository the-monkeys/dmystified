import { db } from '@/db';
import { SectionTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getAllSections(courseId: string) {
  const sections = await db.query.SectionTable.findMany({
    where: eq(SectionTable.courseId, courseId),
  });

  return sections;
}

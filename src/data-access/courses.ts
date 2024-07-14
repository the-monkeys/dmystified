"use server";

import { db } from "@/db";
import { CourseTable } from "@/db/schema";

export async function getAllCourses() {
	const allCourses = await db.select().from(CourseTable);

	return allCourses;
}

"use server";

import { getAllCourses } from "@/data-access/courses";
import { db } from "@/db";
import { CourseTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getCoursesAction = async () => {
	const courses = await getAllCourses();

	return courses;
};

export const addCourseAction = async ({
	cname,
	title,
	description,
}: {
	cname: string;
	title: string;
	description: string;
}) => {
	try {
		const existingCourse = await db
			.select()
			.from(CourseTable)
			.where(eq(CourseTable.cname, cname));

		if (existingCourse.length !== 0) {
			return {
				status: false,
				message: "A course with the same name already exists.",
			};
		}

		await db.insert(CourseTable).values({
			cname,
			title,
			description,
			createdAt: new Date(),
			updatedAt: new Date(),
		});

		return {
			status: true,
			message: "Course added successfully.",
		};
	} catch (error) {
		console.error("Error adding course:", error);

		return {
			status: false,
			message: `Error adding course to database.`,
		};
	}
};

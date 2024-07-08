import { Metadata, ResolvingMetadata } from "next";

import CourseInfo from "./components/CourseInfo";
import { courseList } from "@/constants/courses";
import getMdxComponent from "@/utils/getMdxComponent";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Clock, Text } from "lucide-react";

export async function generateMetadata(
	{ params }: { params: { courseId: string } },
	parent: ResolvingMetadata
): Promise<Metadata> {
	const course = courseList[params.courseId];

	return {
		title: `Dmystified - ${course.title}`,
		description: course.description,
	};
}

export default async function CoursePage({
	params,
}: {
	params: {
		courseId: string;
	};
}) {
	const course = courseList[params.courseId];

	const MdxComponent = await getMdxComponent(course.id);

	return (
		<div className="mx-auto mb-6 sm:mb-8 max-w-7xl px-4 lg:px-8 pt-4 min-h-screen space-y-6">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/#courses">
							All Courses
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{course.title}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<CourseInfo courseName={course.id} />

			{MdxComponent && (
				<div className="space-y-2">
					<p className="font-semibold text-lg sm:text-xl">
						Course Curriculum
					</p>

					<div className="space-y-1">
						<p className="text-gray-800">
							<Text size={16} className="inline-block mr-2" />
							<span className="font-medium">
								{course.sectionCount} section(s)
							</span>
						</p>

						<p className="text-gray-800">
							<Clock size={16} className="inline-block mr-2" />
							<span className="font-medium">
								{course.durationInHours} Hours
							</span>
						</p>
					</div>
				</div>
			)}

			{MdxComponent && <MdxComponent />}
		</div>
	);
}

import { Metadata, ResolvingMetadata } from "next";

import CourseInfo from "./components/CourseInfo";
import { courseList } from "@/constants/courses";
import dynamic from "next/dynamic";

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

export default function CoursePage({
	params,
}: {
	params: {
		courseId: string;
	};
}) {
	const course = courseList[params.courseId];
	const MdxComponent = dynamic(() => import(`@/content/${course.id}.mdx`));

	return (
		<div className="mx-auto mb-6 sm:mb-8 max-w-7xl px-4 lg:px-8 pt-4 min-h-screen space-y-6">
			<CourseInfo courseName={course.id} />

			<div className="px-1">
				<p className="font-medium text-lg sm:text-xl">
					Course Curriculum
				</p>

				<div className="flex gap-4">
					<p className="font-sm">
						<span className="font-medium">
							{course.totalSections}
						</span>{" "}
						sections
					</p>

					<p className="font-sm">
						<span className="font-medium">
							{course.durationString}
						</span>{" "}
						total hours
					</p>
				</div>
			</div>

			<div className="p-2">
				<MdxComponent />
			</div>
		</div>
	);
}

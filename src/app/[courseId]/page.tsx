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
		<div className="mx-auto mb-6 sm:mb-8 max-w-7xl px-4 lg:px-8 pt-4 min-h-screen">
			<Breadcrumb className="mx-2 mb-4">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/#courses">
							All Courses
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage className="cursor-default">
							{course.title}
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<CourseInfo courseName={course.id} />

			{MdxComponent && (
				<div className="mt-10 px-4 flex flex-col gap-4">
					<h4 className="self-center px-6 py-2 font-medium text-xl sm:text-2xl border-b-1 border-gray-200">
						Course{" "}
						<span className="font-semibold text-orange">
							Curriculum
						</span>
					</h4>

					<MdxComponent />
				</div>
			)}
		</div>
	);
}

import { courseList } from "@/constants/courses";
import Image from "next/image";

const CourseInfo = ({ courseName }: { courseName: string }) => {
	const course = courseList[courseName];

	return (
		<div className="p-4 border-1 border-gray-300 rounded-lg space-y-4">
			<Image
				src={course.image || ""}
				alt={course.title}
				width={100}
				height={100}
			/>

			<div>
				<h1 className="py-2 font-semibold text-2xl sm:text-3xl md:text-4xl">
					{course.title}
				</h1>

				<p className="text-sm sm:text-base text-gray-900">
					{course.description}
				</p>
			</div>

			<div className="space-y-1 cursor-default">
				<p className="text-sm divide-x-2 divide-gray-300">
					Instructor:{" "}
					{course.instructors.map((instructor) => (
						<span key={instructor.id} className="px-2 font-medium">
							{instructor.name}
						</span>
					))}
				</p>

				<p className="text-sm">
					Medium: <span className="font-medium">{course.medium}</span>
				</p>
			</div>

			<button
				type="button"
				className="w-fit font-medium rounded-lg border-1 border-transparent bg-orange px-4 py-2 text-white hover:text-orange hover:bg-transparent hover:border-orange outline-none disabled:opacity-75"
			>
				Enroll Now
			</button>
		</div>
	);
};

export default CourseInfo;

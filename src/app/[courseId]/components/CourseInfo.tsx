import Icon from "@/components/icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { courseList } from "@/constants/courses";
import Image from "next/image";

const CourseInfo = ({ courseName }: { courseName: string }) => {
	const course = courseList[courseName];

	return (
		<div className="p-4 border-1 border-gray-300 rounded-lg space-y-4">
			<div className="flex justify-end gap-2">
				<Badge variant="secondary">
					{course.isLive && (
						<Icon name="RiLive" className="text-red-600 mr-1" />
					)}
					{course.isLive ? "Live" : "Upcoming"}
				</Badge>
			</div>

			<div>
				<div className="w-fit h-12">
					<Image
						src={course.imagePath || ""}
						alt={course.title}
						width={100}
						height={100}
						className="h-full w-full"
					/>
				</div>

				<h1 className="py-2 font-semibold text-2xl sm:text-3xl md:text-4xl">
					{course.title}
				</h1>

				<p className="text-sm sm:text-base text-gray-900">
					{course.description}
				</p>
			</div>

			<div className="space-y-1">
				<p className="text-sm space-x-2">
					Instructor(s):{" "}
					{course.instructors.length ? (
						course.instructors.map((instructor) => (
							<span key={instructor.id} className="font-medium">
								{instructor.name}
							</span>
						))
					) : (
						<span className="font-medium">Not assigned yet</span>
					)}
				</p>

				<p className="text-sm">
					Medium: <span className="font-medium">{course.medium}</span>
				</p>
			</div>

			<Button disabled={!course.isLive} type="button">
				Enroll Now
			</Button>
		</div>
	);
};

export default CourseInfo;

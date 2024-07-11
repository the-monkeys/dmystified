import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { CourseItem } from "@/constants/courses";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Icon from "../icon";

const CourseCard: FC<{ course: CourseItem }> = ({ course }) => {
	return (
		<div className="col-span-2 sm:col-span-1 py-4 px-6 bg-gray-50 border-1 border-gray-100 rounded-3xl overflow-hidden">
			<div className="flex justify-end gap-1">
				<Badge variant="secondary">
					{course.isLive && (
						<Icon name="RiLive" className="text-red-600 mr-1" />
					)}
					{course.isLive ? "Live" : "Upcoming"}
				</Badge>
			</div>

			<div className="my-2 w-fit h-12">
				<Image
					src={course.imagePath || ""}
					alt={course.title}
					width={100}
					height={100}
					className="w-full h-full"
				/>
			</div>

			<h1 className="py-1 text-lg font-medium">{course.title}</h1>

			<div className="space-y-1">
				<p className="text-sm">
					Duration:{" "}
					<span className="font-medium">
						{course.durationInHours
							? `${course.durationInHours} Hours`
							: "NA"}
					</span>
				</p>

				<p className="text-sm">
					Medium:{" "}
					<span className="font-medium">
						{course.medium ? course.medium : "NA"}
					</span>
				</p>
			</div>

			<Button className="group w-full mt-6" variant="outline" asChild>
				<Link href={`/${course.id}`}>
					Course Details{" "}
					<div className="mx-2 group-hover:ml-3 group-hover:mr-1 transition-all">
						<Icon name="RiArrowRight" size={16} />
					</div>
				</Link>
			</Button>
		</div>
	);
};

export default CourseCard;

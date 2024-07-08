import { FC } from "react";
import { ArrowRight, Radio } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CourseItem } from "@/constants/courses";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const CourseCard: FC<{ course: CourseItem }> = ({ course }) => {
	return (
		<div className="col-span-2 md:col-span-1 rounded-lg border-1 border-gray-300 hover:shadow-md overflow-hidden">
			<div className="p-4 pb-0 cursor-default">
				<div className="flex justify-end gap-2">
					<Badge variant="secondary">
						{course.isLive && (
							<Radio size={16} className="text-red-600 mr-2" />
						)}
						{course.isLive ? "Live" : "Upcoming"}
					</Badge>

					{course.onHold && (
						<Badge variant="destructive">On Hold</Badge>
					)}
				</div>

				<div className="w-fit h-10">
					<Image
						src={course.imagePath || ""}
						alt={course.title}
						width={100}
						height={100}
						className="w-full h-full"
					/>
				</div>

				<h1 className="py-2 text-xl sm:text-2xl md:text-3xl font-semibold">
					{course.title}
				</h1>
			</div>

			<Separator />

			<div className="p-4 flex flex-col gap-4 cursor-default">
				<p className="flex-1 text-sm sm:text-base">
					{course.description}
				</p>

				<div className="space-y-1">
					<p className="text-sm">
						Duration:{" "}
						<span className="font-medium">
							{course.durationInHours
								? `${course.durationInHours} Hours`
								: "TBD"}
						</span>
					</p>

					<p className="text-sm">
						Medium:{" "}
						<span className="font-medium">
							{course.medium ? course.medium : "TBD"}
						</span>
					</p>
				</div>

				<Button className="group" asChild>
					<Link href={`/${course.id}`}>
						Discover More{" "}
						<div className="mx-2 group-hover:ml-3 group-hover:mr-1 transition-all">
							<ArrowRight size={16} />
						</div>
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default CourseCard;

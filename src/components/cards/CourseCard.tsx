import { FC } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CourseItem } from "@/constants/courses";

const CourseCard: FC<{ course: CourseItem }> = ({ course }) => {
	const { id, title, image, description, durationString, medium } = course;

	return (
		<div className="rounded-lg border-1 border-gray-300 hover:border-gray-400 hover:shadow-md">
			<div className="p-4 pb-0 border-b-1 border-gray-300 cursor-default">
				<Image src={image || ""} alt={title} width={100} height={100} />

				<h1 className="py-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
					{title}
				</h1>
			</div>

			<div className="p-4 cursor-default">
				<p className="text-sm sm:text-base">{description}</p>

				<Link
					href={`/${id}`}
					className="group w-fit mt-2 flex items-center hover:text-orange"
				>
					<p className="font-semibold">Discover More</p>

					<div className="mx-2 group-hover:ml-3 group-hover:mr-1 transition-all">
						<ArrowRight size={16} />
					</div>
				</Link>

				<div className="mt-6 space-y-1 cursor-default">
					<p className="text-sm">
						Duration:{" "}
						<span className="font-medium">
							{durationString} Hours
						</span>
					</p>

					<p className="text-sm">
						Medium: <span className="font-medium">{medium}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;

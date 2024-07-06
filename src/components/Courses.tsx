import Image from "next/image";

import { courseList } from "@/constants/courses";
import CourseCard from "./cards/CourseCard";

const Courses = () => {
	return (
		<section
			className="mx-auto mb-6 sm:mb-8 max-w-7xl px-4 lg:px-8"
			id="courses"
		>
			<div className="mb-8 w-full text-center cursor-default">
				<h2 className="pt-4 sm:pt-6 pb-2 font-semibold text-2xl sm:text-3xl md:text-4xl text-black">
					<span className="text-orange">Courses</span> we offer
				</h2>

				<p className="max-w-xl leading-relaxed text-gray-500 lg:mx-auto">
					Tailor Your Learning with Our Vast Course Selection
				</p>
			</div>

			<div className="flex justify-center">
				{Object.values(courseList).map((course) => {
					return <CourseCard key={course.id} course={course} />;
				})}
			</div>

			<div className="mt-4">
				<p className="text-center text-gray-800">Upcoming courses</p>

				<div className="py-4 flex gap-4 flex-wrap justify-center">
					<Image
						src="./tech/javascript-logo.svg"
						alt="JavaScript"
						width={45}
						height={45}
					/>

					<Image
						src="./tech/typescript-logo.svg"
						alt="Typescript"
						width={45}
						height={45}
					/>

					<Image
						src="./tech/react-logo.svg"
						alt="React"
						width={45}
						height={45}
					/>

					<Image
						src="./tech/nextjs-logo.svg"
						alt="Next"
						width={45}
						height={45}
					/>
				</div>
			</div>
		</section>
	);
};

export default Courses;

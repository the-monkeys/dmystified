import { courseList } from "@/constants/courses";
import CourseCard from "./cards/CourseCard";

const Courses = () => {
	return (
		<section
			className="mx-auto mb-6 sm:mb-8 max-w-7xl px-4 lg:px-8"
			id="courses"
		>
			<div className="mb-8 w-full text-center cursor-default">
				<h2 className="pt-4 sm:pt-6 pb-2 text-2xl sm:text-3xl md:text-4xl text-black">
					<span className="font-medium text-orange">Courses</span> we
					offer
				</h2>

				<p className="max-w-xl leading-relaxed text-gray-500 text-sm sm:text-base lg:mx-auto">
					Tailor Your Learning with Our Vast Course Selection
				</p>
			</div>

			<div className="grid grid-cols-2 gap-4">
				{Object.values(courseList).map((course) => {
					return <CourseCard key={course.id} course={course} />;
				})}
			</div>
		</section>
	);
};

export default Courses;

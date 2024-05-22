import Image from "next/image";

const Courses = () => {
	return (
		<section
			className="mx-auto my-8 sm:my-12 max-w-7xl px-4 lg:px-8"
			id="courses"
		>
			<div className="mb-8 w-full text-center">
				<h2 className="py-4 sm:py-6 font-bold text-2xl sm:text-3xl md:text-4xl text-black">
					<span className="text-orange">Courses</span> we offer
				</h2>

				<p className="max-w-xl leading-relaxed font-semibold text-gray-500 lg:mx-auto">
					Tailor Your Learning with Our Vast Course Selection
				</p>
			</div>

			<div className="mt-4">
				<p className="py-4 text-xl sm:text-2xl md:text-3xl text-center text-gray-800 italic">
					Courses coming soon
					<br />
					stay tuned for updates!
				</p>

				<div className="py-4 flex gap-6 flex-wrap justify-center">
					<Image
						src="./tech/Typescript.svg"
						alt="Golang"
						width={60}
						height={60}
					></Image>

					<Image
						src="./tech/JavaScript.svg"
						alt="Golang"
						width={60}
						height={60}
					></Image>

					<Image
						src="./tech/Go.svg"
						alt="Golang"
						width={60}
						height={60}
					></Image>

					<Image
						src="./tech/React.svg"
						alt="Golang"
						width={60}
						height={60}
					></Image>

					<Image
						src="./tech/Next.js.svg"
						alt="Golang"
						width={60}
						height={60}
					></Image>
				</div>
			</div>
		</section>
	);
};

export default Courses;

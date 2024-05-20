import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<section className="mx-auto max-w-7xl mt-6 px-4 cursor-default">
			<div className="flex flex-col md:flex-row items-end sm:items-center">
				<div className="w-full lg:w-1/2">
					<div className="my-10 lg:my-0 lg:px-10">
						<h2 className="text-3xl leading-tight font-bold text-black sm:text-4xl lg:text-5xl">
							<span className="text-orange italic">Empower</span>{" "}
							Your Future with{" "}
							<span className="text-orange italic">Expert</span>{" "}
							Learning
						</h2>

						<p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-800">
							Welcome to{" "}
							<span className="font-semibold text-black">
								Dmystified
							</span>
							, your gateway to mastering technology. Whether
							you're an aspiring developer or a seasoned pro, our
							teaching empower you with the skills needed to
							thrive in the tech world.
						</p>
					</div>
				</div>

				<div className="w-full lg:w-1/2 flex justify-end">
					<Image
						src="online_learning.svg"
						alt="Learn with Experts"
						width={300}
						height={300}
						className="md:w-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;

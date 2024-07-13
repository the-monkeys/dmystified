import FeatureCard from "./cards/FeatureCard";
import { featureItems } from "@/constants/features";

const Features = () => {
	return (
		<section
			className="mx-auto mb-6 sm:mb-8 max-w-7xl px-4 lg:px-8"
			id="features"
		>
			<div className="mb-8 w-full text-center cursor-default">
				<h2 className="pt-4 sm:pt-6 pb-2 text-2xl sm:text-3xl md:text-4xl text-black">
					Why Choose{" "}
					<span className="font-medium text-orange">Dmystified</span>
					?!
				</h2>

				<p className="max-w-xl leading-relaxed text-gray-500 text-sm sm:text-base lg:mx-auto">
					Discover the benefits of our platform designed to provide an
					exceptional learning experience.
				</p>
			</div>

			<div className="mt-4 grid grid-cols-2 gap-2">
				{featureItems.map((feature) => {
					return (
						<FeatureCard
							key={feature.id}
							id={feature.id}
							title={feature.title}
							icon={feature.icon}
							description={feature.description}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Features;

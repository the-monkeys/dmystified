import FeatureCard from "../cards/FeatureCard";
import { featureItems } from "@/constants/features";

const Features = () => {
	return (
		<section
			className="mx-auto mb-10 sm:mb-12 max-w-7xl px-4 lg:px-8"
			id="features"
		>
			<div className="mb-6 w-full text-center cursor-default">
				<h2 className="py-2 font-medium text-2xl sm:text-3xl md:text-4xl">
					Why Choose <span className="text-orange">Dmystified</span>
					?!
				</h2>

				<p className="max-w-xl leading-relaxed text-gray-800 text-sm md:text-base mx-auto">
					Discover the benefits of our platform designed to provide an
					exceptional learning experience.
				</p>
			</div>

			<div className="mt-4 grid grid-cols-2 gap-4">
				{featureItems.map((feature) => {
					return (
						<FeatureCard
							key={feature.id}
							title={feature.title}
							tag={feature.tag}
							imageName={feature.imageName}
							description={feature.description}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Features;

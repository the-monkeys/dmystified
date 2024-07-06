import FeatureCard from "./cards/FeatureCard";
import { featureItems } from "@/constants/features";

const Features = () => {
	return (
		<section
			className="mx-auto mb-6 sm:mb-8 max-w-7xl px-4 lg:px-8"
			id="features"
		>
			<div className="mb-8 w-full text-center cursor-default">
				<h2 className="pt-4 sm:pt-6 pb-2 font-semibold text-2xl sm:text-3xl md:text-4xl text-black">
					Why Choose <span className="text-orange">Dmystified</span>?!
				</h2>
			</div>

			<div className="mt-4 grid grid-cols-1 gap-y-4 text-center sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
				{featureItems.map((feature) => {
					return (
						<FeatureCard
							key={feature.id}
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

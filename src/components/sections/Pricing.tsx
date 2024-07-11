import { pricingItems } from "@/constants/pricing";
import PricingCard from "../cards/PricingCard";

const Pricing = () => {
	return (
		<section
			className="mx-auto mb-10 sm:mb-12 max-w-7xl px-4 lg:px-8"
			id="pricing"
		>
			<div className="mb-6 w-full text-center cursor-default">
				<h2 className="py-2 font-medium text-2xl sm:text-3xl md:text-4xl">
					<span className="text-orange">Pricing</span> Options
				</h2>

				<p className="max-w-xl leading-relaxed text-gray-800 text-sm md:text-base mx-auto">
					Select the Plan That Fits You Best
				</p>
			</div>

			<div className="flex justify-evenly flex-wrap gap-4">
				{pricingItems.map((pricing) => {
					return <PricingCard key={pricing.id} pricing={pricing} />;
				})}
			</div>
		</section>
	);
};

export default Pricing;

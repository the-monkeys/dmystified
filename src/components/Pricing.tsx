import { pricingItems } from "@/constants/pricing";
import PricingCard from "./cards/PricingCard";

const Pricing = () => {
	return (
		<section
			className="mx-auto mb-6 sm:mb-8 max-w-7xl px-4 lg:px-8"
			id="pricing"
		>
			<div className="mb-8 w-full text-center cursor-default">
				<h2 className="pt-4 sm:pt-6 pb-2 text-2xl sm:text-3xl md:text-4xl text-black">
					<span className="font-medium text-orange">Pricing</span>{" "}
					Options
				</h2>

				<p className="max-w-xl leading-relaxed text-gray-500 text-sm sm:text-base lg:mx-auto">
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

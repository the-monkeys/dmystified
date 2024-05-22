import PricingCard from "./cards/PricingCard";

const pricingItems = [
	{
		id: 1,
		title: "Essential",
		price: "100",
		description: "One-time purchase of",
		features: [
			"Exclusive Access to WhatsApp Group",
			"Live Interactive Classes",
			"Weekly Q&A Sessions",
			"Monthly Coding Competitions",
		],
		isRecommended: false,
	},
	{
		id: 2,
		title: "Advance",
		price: "150",
		description: "One-time purchase of",
		features: [
			"Everything included in Essential",
			"Bi-Weekly Coding Challenges",
			"Guidance on Open Source",
			"Detailed Code Feedback",
		],
		isRecommended: true,
	},
];

const Pricing = () => {
	return (
		<section
			className="mx-auto my-8 sm:my-12 max-w-7xl px-4 lg:px-8"
			id="pricing"
		>
			<div className="mb-8 w-full text-center">
				<h2 className="py-4 sm:py-6 font-bold text-2xl sm:text-3xl md:text-4xl text-black">
					<span className="text-orange">Pricing</span> Options
				</h2>

				<p className="max-w-xl leading-relaxed font-semibold text-gray-500 lg:mx-auto">
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

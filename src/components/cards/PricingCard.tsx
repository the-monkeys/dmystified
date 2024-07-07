import { CheckCircle2 } from "lucide-react";

const PricingCard = ({
	pricing,
}: {
	pricing: {
		title: string;
		price: string;
		description: string;
		features: string[];
		isRecommended: boolean;
	};
}) => {
	const { title, price, description, features, isRecommended } = pricing;

	return (
		<div className="group w-96 flex flex-col border-1 border-gray-300 rounded-lg overflow-hidden hover:border-gray-400">
			<div className="px-4 pt-4 pb-2 border-b-1 border-gray-300 cursor-default">
				<div className="flex items-center gap-2">
					<p className="w-fit px-4 text-xs sm:text-sm border-1 border-black rounded-full">
						{title}
					</p>

					{isRecommended && (
						<p className="w-fit px-4 text-xs sm:text-sm border-1 border-black bg-black text-white rounded-full">
							Recommended
						</p>
					)}
				</div>

				<h2 className="mt-6 font-semibold text-4xl sm:text-5xl text-orange">
					${price}
				</h2>

				<p className="font-semibold text-sm text-gray-800">
					{description}
				</p>
			</div>

			<div className="px-4 py-2 cursor-default">
				<div className="gap-2 px-2 py-6 flex flex-col">
					{features.map((feature, index) => {
						return (
							<div
								className="flex items-center gap-2"
								key={`${index}_${price}`}
							>
								<CheckCircle2 size={20} color="green" />
								<p className="font-medium text-sm sm:text-base">
									{feature}
								</p>
							</div>
						);
					})}
				</div>
			</div>

			<button className="flex justify-center w-full py-4 bg-black group-hover:bg-orange">
				<p className="text-white">Choose Plan</p>
			</button>
		</div>
	);
};

export default PricingCard;

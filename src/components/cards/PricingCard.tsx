import { Check, Wallet } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

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
		<div className="group w-80 flex flex-col border-1 border-gray-300 rounded-lg cursor-default overflow-hidden">
			<div className="p-4 pb-0 border-b-1 border-gray-300 cursor-default">
				<div className="flex items-center justify-end gap-2">
					<Badge variant="secondary">{title}</Badge>

					{isRecommended && (
						<Badge variant="orange">Recommended</Badge>
					)}
				</div>

				<h2 className="py-2 font-semibold text-3xl sm:text-4xl">
					${price}
				</h2>

				<p className="py-1 font-medium text-sm text-gray-800">
					{description}
				</p>
			</div>

			<div className="p-4 space-y-4">
				<div className="py-4 space-y-2">
					{features.map((feature, index) => {
						return (
							<div
								className="flex items-center gap-2"
								key={`${index}_${price}`}
							>
								<Check size="16" color="green" />

								<p className="text-sm">{feature}</p>
							</div>
						);
					})}
				</div>

				<Button
					type="button"
					variant={isRecommended ? "orange" : "secondary"}
					className="w-full"
				>
					<Wallet size="16" className="mr-2" />
					Choose Plan
				</Button>
			</div>
		</div>
	);
};

export default PricingCard;

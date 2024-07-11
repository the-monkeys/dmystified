import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Icon from "../icon";
import { Separator } from "../ui/separator";
import { twMerge } from "tailwind-merge";

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
		<div
			className={twMerge(
				"group w-80 flex flex-col border-1 border-gray-200 rounded-lg cursor-default overflow-hidden",
				isRecommended && "border-orange"
			)}
		>
			<div className="p-4 space-y-4 cursor-default">
				<Badge variant="outline" className="text-sm">
					{title}
				</Badge>

				<div className="flex">
					<p className="self-start font-medium text-lg">$</p>
					<p className="font-semibold text-3xl sm:text-4xl">
						{price}
					</p>
					<p className="px-1 self-end font-medium text-sm text-gray-500">
						/per month
					</p>
				</div>
			</div>

			<Separator />

			<div className="flex-1 p-4">
				<p className="font-medium">Features</p>

				<p className="pt-1 text-sm text-gray-800">{description}</p>

				<div className="mt-4 space-y-2">
					{features.map((feature, index) => {
						return (
							<div
								className="flex items-center gap-2"
								key={`${index}_${price}`}
							>
								<Icon
									name="RiCheck"
									className="text-green-500"
								/>

								<p className="text-sm">{feature}</p>
							</div>
						);
					})}
				</div>
			</div>

			<Separator />

			<div className="p-4">
				<Button
					type="button"
					className={twMerge(
						"w-full rounded-md",
						isRecommended &&
							"text-white bg-orange hover:bg-orange/80"
					)}
				>
					<Icon name="RiWallet" className="mr-1" />
					Choose Plan
				</Button>
			</div>
		</div>
	);
};

export default PricingCard;

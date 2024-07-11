import Image from "next/image";
import { Badge } from "../ui/badge";

const FeatureCard = ({
	title,
	tag,
	imageName,
	description,
}: {
	title: string;
	tag: string;
	imageName: string;
	description: string;
}) => {
	return (
		<div className="relative group h-52 md:h-60 col-span-2 md:col-span-1 p-4 sm:p-6 flex flex-col justify-between rounded-3xl shadow-md shadow-gray-100 overflow-hidden">
			<div className="absolute top-0 right-0 size-40 opacity-80 group-hover:opacity-100">
				<Image
					src={`./${imageName}.svg`}
					alt="Dmystified"
					width={150}
					height={150}
					className="w-full h-full"
				/>
			</div>

			<Badge variant="outline" className="w-fit px-3 py-1 text-sm">
				{tag}
			</Badge>

			<div className="space-y-2 z-10 cursor-default">
				<h2 className="w-1/2 font-semibold text-lg sm:text-xl">
					{title}
				</h2>

				<p className="text-sm sm:text-base text-gray-500">
					{description}
				</p>
			</div>
		</div>
	);
};

export default FeatureCard;

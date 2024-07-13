const FeatureCard = ({
	title,
	icon,
	description,
}: {
	id: number;
	title: string;
	icon: JSX.Element;
	description: string;
}) => {
	return (
		<div className="col-span-2 sm:col-span-1 px-4 py-2 space-y-1 rounded-lg shadow-md">
			<div className="mb-2 size-10 sm:size-12 rounded-full flex justify-center items-center bg-black text-white shadow-md">
				{icon}
			</div>

			<h3 className="font-semibold text-base sm:text-lg">{title}</h3>

			<p className="text-sm sm:text-base opacity-75">{description}</p>
		</div>
	);
};

export default FeatureCard;

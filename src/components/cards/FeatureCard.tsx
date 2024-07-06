const FeatureCard = ({
	title,
	icon,
	description,
}: {
	title: string;
	icon: JSX.Element;
	description: string;
}) => {
	return (
		<div className="px-4 py-2 rounded-lg flex flex-col items-center border-1 border-gray-300 hover:border-gray-400 hover:shadow-md cursor-default overflow-hidden">
			<div className="p-2 text-orange">{icon}</div>

			<h3 className="w-full sm:w-4/5 flex-1 font-semibold text-lg sm:text-xl text-center">
				{title}
			</h3>

			<p className="mt-2 p-2 text-sm opacity-75">{description}</p>
		</div>
	);
};

export default FeatureCard;

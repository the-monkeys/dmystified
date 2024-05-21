const FeatureCard = ({
	title,
	icon,
	description,
}: {
	title: {
		line1: string;
		line2: string;
	};
	icon: JSX.Element;
	description: string;
}) => {
	return (
		<div className="relative px-4 pt-1 pb-4 rounded-lg border-1 border-slate-200 hover:border-slate-400 bg-custom-gradient cursor-default overflow-hidden">
			<div className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-sm z-0"></div>

			<h3 className="relative pt-2 sm:pt-4 font-semibold text-xl sm:text-2xl z-10">
				{title.line1}
				<br />
				{title.line2}
			</h3>

			<div className="relative p-2 flex justify-center">{icon}</div>

			<p className="relative mt-4 sm:mt-6 text-slate-900 text-xs sm:text-sm z-10">
				{description}
			</p>
		</div>
	);
};

export default FeatureCard;

import { Book, GitBranch, Handshake, Laptop2 } from "lucide-react";
import FeatureCard from "./cards/FeatureCard";

const featureItems = [
	{
		id: 1,
		title: {
			line1: "Expert-Led",
			line2: "Live Sessions",
		},
		icon: <Laptop2 size={30} />,
		description:
			"Immerse yourself in our dynamic learning environment by joining our expert-led live classes. ",
	},
	{
		id: 2,
		title: {
			line1: "Open Source ",
			line2: "Onboarding",
		},
		icon: <GitBranch size={30} />,
		description:
			"Venture into the vibrant world of open source with our guidance and support. ",
	},
	{
		id: 3,
		title: {
			line1: "Personalized",
			line2: "Mentorship",
		},
		icon: <Handshake size={30} />,
		description:
			"Elevate your learning experience with personalized guidance tailored to your individual needs. ",
	},
	{
		id: 4,
		title: {
			line1: "Comprehensive",
			line2: "Curriculum",
		},
		icon: <Book size={30} />,
		description:
			"Begin a structured learning journey to equip yourself with deep understanding of key concepts. ",
	},
];

const Features = () => {
	return (
		<section
			className="mx-auto my-8 sm:my-12 max-w-7xl px-4 lg:px-8"
			id="features"
		>
			<h1 className="py-4 sm:py-6 font-bold text-2xl sm:text-3xl md:text-4xl text-center">
				Why Choose <span className="text-orange">Dmystified</span>?!
			</h1>

			<div className="mt-4 grid grid-cols-1 gap-y-4 text-center sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
				{featureItems.map((feature) => {
					return (
						<FeatureCard
							key={feature.id}
							title={feature.title}
							icon={feature.icon}
							description={feature.description}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Features;

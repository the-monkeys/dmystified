"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
	const [openAccordion, setOpenAccordion] = useState(null);

	const toggleAccordion = (index: any) => {
		setOpenAccordion(openAccordion === index ? null : index);
	};

	const faqData = [
		{
			question: "What is the cost of the monthly subscription?",
			answer: "Our monthly subscription fee is $150, which provides comprehensive access to all our courses and resources.",
		},
		{
			question: "How do I participate in the live classes?",
			answer: "Upon subscription, you will gain access to our class schedule. To join a live session, simply log in to your account at the scheduled time.",
		},
		{
			question:
				"Are there any prerequisites for enrolling in your courses?",
			answer: "While some courses may have recommended prerequisites, the majority are designed to accommodate learners of all levels. Our goal is to provide accessible education for everyone.",
		},
		{
			question: "Is it possible to cancel my subscription at any time?",
			answer: "Yes, you may cancel your subscription at any time, without any questions asked. We strive to offer maximum flexibility to our learners.",
		},
	];

	return (
		<section
			className="mx-auto p-8 my-8 sm:my-12 max-w-7xl px-4 lg:px-8 rounded-lg bg-gray-50"
			id="faq"
		>
			<div>
				<div className="mb-8 w-full text-center">
					<h2 className="py-4 sm:py-6 font-bold text-2xl sm:text-3xl md:text-4xl text-black">
						<span className="text-orange">Got Questions?</span>{" "}
						We&apos;ve Got Answers
					</h2>

					<p className="max-w-xl leading-relaxed font-semibold text-gray-500 lg:mx-auto">
						Explore Our FAQ Section for Quick Solutions to Common
						Queries and Concerns
					</p>
				</div>

				<div className="mx-auto mt-6 max-w-3xl space-y-4">
					{faqData.map((faq, index) => (
						<div
							key={index}
							className="cursor-pointer rounded-md border border-gray-300 hover:border-orange shadow-sm"
						>
							<button
								type="button"
								className="flex w-full items-center justify-between px-4 py-2"
								onClick={() => toggleAccordion(index)}
							>
								<span className="py-4 flex text-base sm:text-lg font-semibold text-black">
									{faq.question}
								</span>

								{openAccordion === index ? (
									<ChevronUp className="h-5 w-5 text-gray-500" />
								) : (
									<ChevronDown className="h-5 w-5 text-gray-500" />
								)}
							</button>

							{openAccordion === index && (
								<div className="px-4 pb-4">
									<p className="text-sm sm:text-base font-normal text-gray-800">
										{faq.answer}
									</p>
								</div>
							)}
						</div>
					))}
				</div>

				<p className="mt-4 leading-relaxed font-semibold text-gray-500 text-center">
					Can&apos;t find what you&apos;re looking for?{" "}
					<a
						href="#"
						title=""
						className="font-semibold text-black hover:underline"
					>
						Contact our support
					</a>
				</p>
			</div>
		</section>
	);
};

export default FAQ;

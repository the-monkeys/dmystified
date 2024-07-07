import { faqData } from "@/constants/faq";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
	return (
		<section
			className="mx-auto p-8 mb-6 sm:mb-8 max-w-7xl px-4 lg:px-8 rounded-lg bg-gray-50 space-y-8"
			id="faq"
		>
			<div className="w-full text-center cursor-default">
				<h2 className="pt-4 sm:pt-6 pb-2 text-2xl sm:text-3xl md:text-4xl text-black">
					<span className="font-medium text-orange">
						Got Questions?
					</span>{" "}
					We&apos;ve Got Answers
				</h2>

				<p className="max-w-xl leading-relaxed text-gray-500 text-sm sm:text-base lg:mx-auto">
					Explore Our FAQ Section for Quick Solutions to Common
					Queries and Concerns
				</p>
			</div>

			<Accordion type="single" collapsible className="w-full">
				{faqData.map((faq, index) => (
					<AccordionItem key={faq.id} value={`item-${faq.id}`}>
						<AccordionTrigger className="text-base sm:text-lg font-semibold text-black">
							{faq.query}
						</AccordionTrigger>

						<AccordionContent className="py-2 text-sm sm:text-base text-gray-800">
							{faq.response}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<p className="py-4 leading-relaxed font-medium text-sm text-gray-500 text-center">
				Can&apos;t find what you&apos;re looking for?{" "}
				<a href="#" title="" className="text-black">
					Contact our support
				</a>
			</p>
		</section>
	);
};

export default FAQ;

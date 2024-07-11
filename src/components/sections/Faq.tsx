import { faqData } from "@/constants/faq";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
	return (
		<section
			className="mx-auto mb-10 sm:mb-12 max-w-7xl px-4 lg:px-8"
			id="faq"
		>
			<div className="mb-6 w-full text-center cursor-default">
				<h2 className="py-2 font-medium text-2xl sm:text-3xl md:text-4xl">
					<span className="text-orange">Got Questions?</span>{" "}
					We&apos;ve Got Answers
				</h2>

				<p className="max-w-xl leading-relaxed text-gray-800 text-sm md:text-base mx-auto">
					Explore Our FAQ Section for Quick Solutions to Common
					Queries and Concerns
				</p>
			</div>

			<Accordion
				type="single"
				collapsible
				className="w-full sm:w-4/5 mx-auto"
			>
				{faqData.map((faq, index) => (
					<AccordionItem
						key={faq.id}
						value={`item-${faq.id}`}
						className="p-2"
					>
						<AccordionTrigger className="font-medium text-left">
							{faq.query}
						</AccordionTrigger>

						<AccordionContent className="py-2 text-sm text-gray-800">
							{faq.response}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	);
};

export default FAQ;

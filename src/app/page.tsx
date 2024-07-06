import React from "react";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/Faq";
import Courses from "@/components/Courses";

export default function () {
	return (
		<div className="w-full bg-white">
			<Hero />
			<Courses />
			<Features />
			<Pricing />
			<FAQ />
			<ContactUs />
		</div>
	);
}

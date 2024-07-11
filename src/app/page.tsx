import React from "react";

import Hero from "@/components/sections/Hero";
import { Separator } from "@/components/ui/separator";
import Features from "@/components/sections/Features";
import Courses from "@/components/sections/Courses";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/Faq";
import ContactUs from "@/components/sections/ContactUs";

export default function HomePage() {
	return (
		<div className="w-full bg-white">
			<Hero />
			<Features />
			<Courses />
			<Pricing />
			<FAQ />
			<ContactUs />
			<Separator />
		</div>
	);
}

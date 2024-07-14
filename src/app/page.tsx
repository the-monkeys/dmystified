import React from "react";

import Hero from "@/components/sections/Hero";
import { Separator } from "@/components/ui/separator";
import Features from "@/components/sections/Features";
import Courses from "@/components/sections/Courses";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/Faq";
import ContactUs from "@/components/sections/ContactUs";
import Container from "@/components/layout/Container";

export default function HomePage() {
	return (
		<Container className="bg-white">
			<Hero />
			<Features />
			<Courses />
			<Pricing />
			<FAQ />
			<ContactUs />
		</Container>
	);
}

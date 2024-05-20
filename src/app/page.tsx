import React from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import NewsLetter from "@/components/NewsLetter";
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/Faq";

export default function Home() {
	return (
		<div className="w-full bg-white">
			<Hero />
			<Features />
			<Pricing />
			<FAQ />
			{/* <NewsLetter /> */}
			<ContactUs />
		</div>
	);
}

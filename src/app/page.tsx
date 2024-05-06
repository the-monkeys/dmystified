import React from "react";
import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Menu,
  Star,
  X,
} from "lucide-react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import NewsLetter from "@/components/NewsLetter";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* FAQs */}
      <Faq />
      {/* Pricing Section */}
      <Pricing />
      {/* NewsLetter */}
      {/* <NewsLetter /> */}
      {/* Contact US */}
      <ContactUs />
      {/* footer */}
    </div>
  );
}

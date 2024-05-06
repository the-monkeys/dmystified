"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the monthly subscription fee?",
      answer:
        "Our monthly subscription fee is $150, granting you access to all our courses and resources.",
    },
    {
      question: "How do I join the live classes?",
      answer:
        "Once you subscribe, you'll receive access to our class schedule. Simply log in to your account at the designated time to join the live session.",
    },
    {
      question: "Are there any prerequisites for enrolling in your courses?",
      answer:
        "While some courses may have recommended prerequisites, most are designed to accommodate learners of all levels. We believe in providing accessible education for everyone.",
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer:
        "Yes, you can cancel your subscription at any time with no questions asked. We believe in providing flexibility to our learners.",
    },
  ];

  return (
    <section
      className="mx-auto max-w-7xl bg-gray-50 px-2 py-10 md:px-0"
      id="faq"
    >
      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
            assumenda
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                onClick={() => toggleAccordion(index)}
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                {openAccordion === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openAccordion === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="textbase mt-6 text-center text-gray-600">
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

export default Faq;

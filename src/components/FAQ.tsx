"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "Where Do We Begin?",
    answer:
      "Reach out with your wedding date and vision. We’ll schedule a short call to discuss your style, venue, and how you’d like music to shape your day—then we’ll tailor a proposal just for you.",
  },
  {
    question: "What Are My Prices?",
    answer:
      "Packages vary by duration, number of sets, and add-ons (e.g. ceremony + cocktail + reception). We’ll send a clear, custom quote after our initial conversation.",
  },
  {
    question: "How Long Does an Engagement Last?",
    answer:
      "Most couples book 6–12 months ahead. We recommend securing your date as soon as you’re ready so we can hold it for you and plan the details together.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[var(--color-beige)] px-12 py-20 max-w-[1600px] mx-auto"
    >
      <h2 className="font-heading text-[52px] leading-[1.1] text-[var(--color-dark)] text-center mb-16">
        FAQ
      </h2>

      <div className="flex flex-col md:flex-row items-stretch gap-12 md:gap-16">
        <div className="flex-1 flex flex-col gap-8">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-[var(--color-border-accent)] pb-6">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-[22px] md:text-[26px] leading-tight text-[var(--color-dark)]">
                    {faq.question}
                  </span>
                  <span
                    className="shrink-0 w-8 h-8 flex items-center justify-center font-body text-[18px] text-[var(--color-dark)] transition-transform duration-200"
                    aria-hidden
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 font-body text-[15px] leading-[1.7] text-[var(--color-gray)]">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative w-full md:w-[420px] h-[320px] md:h-[380px] shrink-0 overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Hands on laptop"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

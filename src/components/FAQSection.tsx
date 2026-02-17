"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
  {
    question: "Where Do We Begin?",
    answer:
      "Reach out with your date, venue, and vision. We’ll schedule a short call to hear your story and musical taste, then send a tailored proposal and song list so you can imagine your day with us.",
  },
  {
    question: "What Are My Prices?",
    answer:
      "Packages are customized to your event—ceremony only, reception, or full day. Pricing depends on duration, travel, and any special requests. We’ll send a clear quote after our initial conversation.",
  },
  {
    question: "How Long Does an Engagement Last?",
    answer:
      "We recommend booking 6–12 months ahead for peak dates. We can sometimes accommodate last-minute requests if our calendar allows. A signed agreement and deposit secure your date.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-[var(--color-beige)] px-12 py-[80px] max-w-[1600px] mx-auto"
    >
      <h2 className="font-heading text-[52px] tracking-[2px] text-[var(--color-dark)] text-center mb-16">
        FAQ
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16 items-start">
        <div className="flex flex-col gap-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-[var(--color-border-accent)] py-6 group cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-body text-[16px] tracking-[0.5px] text-[var(--color-dark)]">
                  {faq.question}
                </p>
                <span
                  className="shrink-0 w-6 h-6 flex items-center justify-center font-body text-[18px] text-[var(--color-dark)] transition-transform duration-200"
                  aria-hidden
                >
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>
              {openIndex === i && (
                <p className="font-body text-[15px] leading-[1.7] text-[var(--color-gray)] mt-4 pr-10">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="relative w-full aspect-[4/5] max-h-[500px] rounded-2xl overflow-hidden shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
            alt="Wedding planning"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

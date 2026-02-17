import {
  HomeSection,
  AboutJenny,
  AboutEmily,
  FAQSection,
  ContactSection,
} from "@/components";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-[var(--color-beige)]">
      <HomeSection />
      <AboutJenny />
      <AboutEmily />
      <FAQSection />
      <ContactSection />
    </main>
  );
}

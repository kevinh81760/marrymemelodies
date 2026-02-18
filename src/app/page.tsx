import {
  HomeSection,
  AboutJenny,
  AboutEmily,
  MeetTheVoices,
  FAQ,
  Contact,
} from "@/components";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col bg-[var(--color-beige)]">
      <HomeSection />
      <AboutJenny />
      <AboutEmily />
      <MeetTheVoices />
      <FAQ />
      <Contact />
    </main>
  );
}

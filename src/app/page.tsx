import { CalendarSection } from "@/components/CalendarSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StorySection } from "@/components/StorySection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <CalendarSection />
        <StorySection />
      </main>
      <Footer />
    </>
  );
}

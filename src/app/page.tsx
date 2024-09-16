import ContactSection from "@/components/section/contact-section";
import { HeroSection } from "@/components/section/hero-section";
import ServiceSection from "@/components/section/service-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="h-screen w-screen overflow-hidden">
        <HeroSection />
      </div>
      <div className="h-screen w-screen">
        <ServiceSection />
      </div>
      <div className="h-screen w-screen">
        <ContactSection />
      </div>
    </main>
  );
}

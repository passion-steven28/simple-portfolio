import ContactSection from "@/components/section/contact-section";
import { HeroSection } from "@/components/section/hero-section";
import ServiceSection from "@/components/section/service-section";

export default function Home() {
  return (
    <main className="">
      <div className="h-screen w-full overflow-hidden">
        <HeroSection />
      </div>
      <div className="size-full">
        <ServiceSection />
      </div>
      <div className="h-screen w-full">
        <ContactSection />
      </div>
    </main>
  );
}

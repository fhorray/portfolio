import AboutSection from "@/components/about-section";
import HardSkills from "@/components/hard-skills";
import Header from "@/components/header";
import HeroSection from "@/components/hero";

export default function Home() {
  return (
    <>
      {/* CONTENT */}
      <div className="w-full left-0 right-0 mx-auto">
        <Header />
        <HeroSection />
        <HardSkills />
        <div className="section-detail">
          <AboutSection />
        </div>
      </div>
    </>
  );
}

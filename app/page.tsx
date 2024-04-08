import { AboutSection } from "@/components/about-section";
import { Certificates } from "@/components/certificates";
import { Footer } from "@/components/footer";
import { HardSkills } from "@/components/hard-skills";
import { HeroSection } from "@/components/hero";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      {/* CONTENT */}
      <HeroSection />
      <HardSkills />
      <div className="section-detail">
        <AboutSection />
      </div>
      <div className="section-detail-bottom">
        <Projects />
      </div>
      <div className="section-detail">
        <Certificates />
      </div>

      <Footer />
    </>
  );
}

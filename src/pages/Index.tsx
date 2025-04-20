
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ResumeSection from "@/components/ResumeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ThoughtLeadershipSection from "@/components/ThoughtLeadershipSection";
import StartupSection from "@/components/StartupSection";
import SkillJournalSection from "@/components/SkillJournalSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ResumeSection />
      <ProjectsSection />
      <ThoughtLeadershipSection />
      <StartupSection />
      <SkillJournalSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

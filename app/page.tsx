import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Capabilities from "@/components/home/Capabilities";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CareerSnapshot from "@/components/home/CareerSnapshot";
import EngineeringApproach from "@/components/home/EngineeringApproach";
import ContactCTA from "@/components/home/ContactCTA";
import ExperiencePreview from "@/components/home/ExperiencePreview";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <CareerSnapshot />

      <ExperiencePreview />

      {/* <Stats /> */}

      <Capabilities />

      <FeaturedProjects />

      <EngineeringApproach />

      <ContactCTA />
    </main>
  );
}
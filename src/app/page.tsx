"use client";
import Hero from "./components/Hero";
import { ServiceSection } from "./components/Service-Section";
import { FinanceSimulator } from "./components/Finance-Simulator";
import AboutSection from "./components/About-Section";
import { SectionProject } from "@/app/components/SectionProject";
import { SectionArticle } from "./components/SectionArticle";
import { Footer } from "./components/Footer";
import { allProjects } from "@/data/projects";
import AnimationWrapper from "./components/AnimationWrapper";

export default function Home() {
  return (
    <AnimationWrapper>
      <main className="min-h-screen bg-[#F5F4F2] relative overflow-x-hidden">
        <Hero />
        <AboutSection />
        <ServiceSection />
        <SectionProject projects={allProjects} showTitle={true} />
        {/* <SectionArticle /> */}
        {/* <FinanceSimulator className="mt-10 lg:mt-60" /> */}
        <Footer />
      </main>
    </AnimationWrapper>
  );
}

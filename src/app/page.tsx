"use client";
import Hero from "./components/Hero";
import AnimationWrapper from "./components/AnimationWrapper";
import { ServiceSection } from "./components/Service-Section";
import { FinanceSimulator } from "./components/Finance-Simulator";
import AboutSection from "./components/About-Section";
import { SectionProject } from "@/app/components/SectionProject";
import { SectionArticle } from "./components/SectionArticle";
import { Footer } from "./components/Footer";
import { getPublicResidences } from "@/lib/api";
import { Project as ProjectType } from "@/data/projects";
import React from "react";

export default function Home() {
  const [projects, setProjects] = React.useState<ProjectType[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getPublicResidences()
      .then(setProjects)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <AnimationWrapper>
      <main className="min-h-screen bg-[#F5F4F2] relative overflow-x-hidden">
        <Hero />
        <AboutSection />
        <ServiceSection />
        <SectionProject projects={projects} showTitle={true} isLoading={loading} />
        {/* <SectionArticle /> */}
        {/* <FinanceSimulator className="mt-10 lg:mt-60" /> */}
        <Footer />
      </main>
    </AnimationWrapper>

  );
}

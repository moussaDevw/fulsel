import React from "react";
import HeroSection from "../components/Hero";
import AboutSection from "../components/About-Section";
import { ServiceSection } from "../components/Service-Section";
import { SectionArticle } from "../components/SectionArticle";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <SectionArticle />
    </div>
  );
}

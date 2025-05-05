"use client";
import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/app/components/Footer";
import { FinanceSimulator } from "@/app/components/Finance-Simulator";
import { useRouter } from "next/navigation";
import { SectionProject } from "@/app/components/SectionProject";
import { allProjects } from "@/data/projects";

export default function NosProjectPage() {
  const router = useRouter();

  const goToProject = (slug: string) => {
    router.push(`/projets/${slug}`);
  };

  return (
    <div className="bg-[#FDFBF9] flex flex-row justify-center w-full">
      <div className="overflow-hidden w-full relative">
        <HeroSection
          title="Projets"
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "Projets", link: "/projets", isActive: true },
          ]}
        />

        <section className="w-full py-16">
          {/* Projects Grid */}
          <SectionProject
            projects={allProjects}
            showTitle={true}
            shwAllProjects={false}
            className="bg-[#FDFBF9]"
          />

          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-5">
            <img className="" alt="Previous" src="/assets/svgs/arrowLeft.svg" />
            <img alt="Next" src="/assets/svgs/arrowRigth.svg" />
          </div>
        </section>

        <FinanceSimulator className="bg-[#F5F4F2] !mb-0 py-15 pt-35" />
        <Footer className="mt-0" />
      </div>
    </div>
  );
}

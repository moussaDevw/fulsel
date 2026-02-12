"use client";
import React from "react";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/app/components/Footer";
import { FinanceSimulator } from "@/app/components/Finance-Simulator";
import { useRouter } from "next/navigation";
import { SectionProject } from "@/app/components/SectionProject";
import { getPublicResidences } from "@/lib/api";
import { Project as ProjectType } from "@/data/projects";

export default function NosProjectPage() {
  const [projects, setProjects] = React.useState<ProjectType[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getPublicResidences()
      .then(setProjects)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

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
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-fulser-blue"></div>
            </div>
          ) : (
            <SectionProject
              projects={projects}
              showTitle={true}
              shwAllProjects={false}
              className="bg-[#FDFBF9]"
            />
          )}


          {/* Pagination */}
          <div className="flex justify-center mt-12 gap-5">
            <img className="" alt="Previous" src="/assets/svgs/arrowLeft.svg" />
            <img alt="Next" src="/assets/svgs/arrowRigth.svg" />
          </div>
        </section>

        {/* <FinanceSimulator className="bg-[#F5F4F2] !mb-0 py-15 pt-35" /> */}
        <Footer className="mt-0" />
      </div>
    </div>
  );
}

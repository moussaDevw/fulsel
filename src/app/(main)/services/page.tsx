"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/app/components/Footer";
import { FinanceSimulator } from "@/app/components/Finance-Simulator";
import { useRouter } from "next/navigation";

const financingSteps = [
  {
    id: "1",
    title: "RECHERCHE DE FONCIER",
    description:
      "Nous facilitons la rencontre entre propriétaires fonciers et porteurs de projets immobiliers grâce à un réseau solide...",
    imageSrc: "/assets/images/se1.jpg",
    imagePosition: "bottom",
  },
  {
    id: "2",
    title: "ELABORATION DU PROJET",
    description:
      "Nous accompagnons nos partenaires dans la conception et la structuration de projets immobiliers viables et durables...",
    imageSrc: "/assets/images/se2.jpg",
    imagePosition: "top",
  },
  {
    id: "3",
    title: "COMMERCIALISATION",
    description:
      "Nous prenons en charge la commercialisation des projets pour optimiser leur visibilité et accélérer les ventes...",
    imageSrc: "/assets/images/img4.jpg",
    imagePosition: "bottom",
  },
  {
    id: "4",
    title: "SUIVI DES TRAVAUX",
    description:
      "Nous assurons le suivi technique et administratif des chantiers pour garantir la qualité et le respect des délais...",
    imageSrc: "/assets/images/outils.jpg",
    imagePosition: "bottom",
  },
  {
    id: "5",
    title: "GESTION IMMOBILIÈRE",
    description:
      "Nous proposons un service de gestion immobilière pour assurer la valorisation continue du patrimoine bâti...",
    imageSrc: "/assets/images/constructeur.jpg",
    imagePosition: "top",
  },
];

export default function ServicesPage() {
  const router = useRouter();
  const goToService = (id: string) => {
    router.push(`/services/${id}`);
  };
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <div className="absolute bottom-0 inset-0 w-full min-h-screen bg-[url(/assets/images/iconBg.png)] opacity-3" />
      <div className="overflow-hidden w-full relative">
        <HeroSection
          title="Services"
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "Services", link: "/services", isActive: true },
          ]}
        />
        <section className="relative container py-8 sm:py-12 md:py-1 lg:py-16 mt-0 md:mt-20 bg-[url(/rectangle-63.png)] bg-cover bg-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {financingSteps.map((step, index) => (
              <Card
                key={step.id}
                onClick={() => goToService(step.id)}
                className="relative h-auto min-h-[500px] sm:min-h-[550px] md:min-h-[600px] rounded-[16px] sm:rounded-[21px] shadow-[0px_0px_7px_#1f335940] overflow-hidden cursor-pointer transition-transform hover:scale-105 border-none bg-white mb-10 mt-10 md:mt-0 lg:mt-0"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  <div
                    className={`flex flex-col h-full ${
                      step.imagePosition === "bottom" ? "justify-between" : ""
                    }`}
                  >
                    {step.imagePosition === "top" && (
                      <div className="w-full h-[180px] sm:h-[220px] md:h-[249px] p-[11px] shrink-0">
                        <div
                          className="w-full h-full bg-cover bg-center rounded-[16px] sm:rounded-[21px] shadow-[0px_0px_7px_#1f335940]"
                          style={{ backgroundImage: `url(${step.imageSrc})` }}
                        ></div>
                      </div>
                    )}

                    <div className="p-3 sm:p-4 md:p-5 flex-grow">
                      <div className="relative">
                        <div className="flex items-start sm:items-center gap-2">
                          <span className="[font-family:'Elza_Text_Trial-Bold',Helvetica] font-bold text-[#122e48] text-[40px] sm:text-[50px] md:text-[63px] leading-[40px] sm:leading-[50px] md:leading-[63px]">
                            {step.id.padStart(2, "0")}
                          </span>

                          <h3 className="[font-family:'Elza_Text_Trial-Bold',Helvetica] font-bold text-[#d99541] text-base sm:text-xs md:text-sm xl:text-[22px] leading-[24px] sm:leading-[28px] md:leading-[30px] mt-2">
                            {step.title}
                          </h3>
                        </div>

                        <p className="[font-family:'Raleway',Helvetica] font-normal text-[#122e48] text-sm sm:text-base leading-[22px] sm:leading-[24px] md:leading-[27px] mt-4 sm:mt-6">
                          {step.description}
                        </p>

                        <Button
                          variant="outline"
                          className="w-[110px] sm:w-[126px] h-[36px] sm:h-[43px] rounded-[46px] border-[#d99541] [font-family:'Raleway',Helvetica] font-bold text-[#d99541] text-[13px] sm:text-[15px] tracking-[0.5px] sm:tracking-[0.75px] hover:bg-[#d99541] hover:text-white transition-colors mt-6 sm:mt-8"
                        >
                          LIRE PLUS
                        </Button>
                      </div>
                    </div>

                    {step.imagePosition === "bottom" && (
                      <div className="w-full h-[180px] sm:h-[220px] md:h-[249px] p-[11px] shrink-0">
                        <img
                          className="w-full h-full object-cover rounded-[16px] sm:rounded-[21px] shadow-[0px_0px_7px_#1f335940]"
                          alt={`Illustration for ${step.title}`}
                          src={step.imageSrc}
                        />
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <div className="bg-[#F5F4F2] z-10">
        {/* <FinanceSimulator className="mt-0 md:mt-40 lg:mt-25" /> */}
      </div>
      <Footer className="mt-0" />
    </div>
  );
}

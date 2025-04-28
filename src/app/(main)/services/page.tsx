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
    id: "01",
    title: "RECHERCHE DE FONCIER",
    description:
      "Partenariats avec des propriétaires pour mise à disposition de leurs terrains. En contre-partie, le propriétaire reçoit un ou des lots dans le cadre du projet.",
    imageSrc: "/assets/images/se1.jpg",
    imagePosition: "bottom",
  },
  {
    id: "02",
    title: "ELABORATION DU PROJET :",
    description:
      "Elaboration du projet immobilier selon la clientèle cible et selon le quartier en collaboration avec l'architecte. Construction clés en main.",
    imageSrc: "/assets/images/se2.jpg",
    imagePosition: "top",
  },
  {
    id: "03",
    title: "COMMERCIALISATION",
    description:
      "Vente en l'état futur d'achèvement (VEFA) qui permet une acquisition en douceur du bien par les futurs propriétaires.",
    imageSrc: "/assets/images/img4.jpg",
    imagePosition: "bottom",
  },
  {
    id: "04",
    title: "SUIVI DES TRAVAUX",
    description:
      "Respect des échéances et des budgets, contrôle de la qualité et de la conformité.",
    imageSrc: "/assets/images/se2.jpg",
    imagePosition: "bottom",
  },
  {
    id: "05",
    title: "GESTION IMMOBILIÈRE",
    description:
      "Gestion locative des appartements et maintenance des immeubles.",
    imageSrc: "/assets/images/se1.jpg",
    imagePosition: "top",
  },
];

export default function ServicesPage() {
  const router = useRouter();
  const goToService = (id: number) => {
    router.push(`/services/${id}`);
  };
  return (
    <div className="bg-white flex flex-col min-h-screen w-full">
      <div className="bg-[url(/assets/images/img11.jpg)] bg-cover bg-center overflow-hidden w-full relative">
        <HeroSection
          title="Services"
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "Services", link: "/services", isActive: true },
          ]}
        />
        <section className="w-full max-w-[1440px] mx-auto py-8 sm:py-12 md:py-16 mt-0 md:mt-20 bg-[#f0f0f02b] bg-[url(/rectangle-63.png)] bg-cover bg-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {financingSteps.map((step, index) => (
                <Card
                  key={step.id}
                  onClick={() => goToService(index)}
                  className="relative h-[450px] sm:h-[500px] md:h-[560px] bg-white rounded-[16px] sm:rounded-[21px] shadow-[0px_0px_7px_#1f335940] overflow-hidden cursor-pointer transition-transform hover:scale-105 border-none"
                >
                  <CardContent className="p-0 h-full">
                    {step.imagePosition === "top" && (
                      <div className="relative w-full h-[180px] sm:h-[220px] md:h-[249px] p-[11px]">
                        <div
                          className="w-full h-full bg-cover bg-center rounded-[16px] sm:rounded-[21px] shadow-[0px_0px_7px_#1f335940]"
                          style={{ backgroundImage: `url(${step.imageSrc})` }}
                        ></div>
                      </div>
                    )}

                    <div className="p-3 sm:p-4 md:p-5">
                      <div className="relative">
                        <div className="flex items-center gap-2">
                          <span className="[font-family:'Elza_Text_Trial-Bold',Helvetica] font-bold text-[#122e48] text-[40px] sm:text-[50px] md:text-[63px] leading-[40px] sm:leading-[50px] md:leading-[63px]">
                            {step.id}
                          </span>

                          <h3
                            className={`[font-family:'Elza_Text_Trial-Bold',Helvetica] font-bold text-[#d99541] text-base sm:text-lg md:text-[22px] leading-[24px] sm:leading-[28px] md:leading-[30px] mt-2 sm:mt-3 md:mt-4 ${
                              step.imagePosition === "top"
                                ? "mt-2 sm:mt-3 md:mt-4"
                                : ""
                            }`}
                          >
                            {step.title}
                          </h3>
                        </div>

                        <p className="[font-family:'Raleway',Helvetica] font-normal text-[#122e48] text-sm sm:text-base leading-[22px] sm:leading-[24px] md:leading-[27px] mt-2 sm:mt-3 md:mt-4 min-h-[90px] sm:min-h-[100px] md:min-h-[108px]">
                          {step.description}
                        </p>

                        <Button
                          variant="outline"
                          className="w-[110px] sm:w-[126px] h-[36px] sm:h-[43px] rounded-[46px] border-[#d99541] [font-family:'Raleway',Helvetica] font-bold text-[#d99541] text-[13px] sm:text-[15px] tracking-[0.5px] sm:tracking-[0.75px] hover:bg-[#d99541] hover:text-white transition-colors mt-2 sm:mt-4"
                        >
                          LIRE PLUS
                        </Button>
                      </div>
                    </div>

                    {step.imagePosition === "bottom" && (
                      <div className="absolute bottom-3 sm:bottom-4 md:bottom-3 left-0 w-full">
                        <div className="relative w-full">
                          <img
                            className="w-[calc(100%-20px)] h-[180px] sm:h-[220px] md:h-[249px] mx-auto object-cover rounded-[16px] sm:rounded-[21px] shadow-[0px_0px_7px_#1f335940]"
                            alt={`Illustration for ${step.title}`}
                            src={step.imageSrc}
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <FinanceSimulator className="mt-0 md:mt-40 lg:mt-60" />
      </div>
      <Footer />
    </div>
  );
}

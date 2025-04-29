"use client";
import { ChevronRightIcon, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeroSection } from "@/components/HeroSection";
import { Footer } from "@/app/components/Footer";
import { HandSection } from "@/components/HandSection";
import { useParams, useRouter } from "next/navigation";

// Data for services
const servicesList = [
  { id: "1", name: "Recherche de foncier", slug: "recherche-de-foncier" },
  { id: "2", name: "Élaboration Du Projet", slug: "elaboration-du-projet" },
  { id: "3", name: "Commercialisation", slug: "commercialisation" },
  { id: "4", name: "Suivi des travaux", slug: "suivi-des-travaux" },
  { id: "5", name: "Gestion Immobilière", slug: "gestion-immobiliere" },
];

// Contenu pour chaque service
const serviceContent = {
  "1": {
    title: "Recherche de foncier",
    image: "/assets/images/img3.jpg",
    sections: [
      {
        title: "Lorem ipsum",
        content:
          "Partenariats avec des propriétaires pour mise à disposition de leurs terrains. En contre-partie, le propriétaire reçoit un ou des lots dans le cadre du projet.",
      },
      // {
      //   title: "Lorem ipsum",
      //   content:
      //     "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      // },
    ],
  },
  "2": {
    title: "Élaboration Du Projet",
    image: "/assets/images/img2.jpg",
    sections: [
      {
        title: "Planification",
        content:
          "Notre équipe d'experts vous accompagne dans la planification de votre projet immobilier. Nous prenons en compte tous les aspects techniques, juridiques et financiers pour assurer la réussite de votre projet.",
      },
      {
        title: "Conception",
        content:
          "Nous collaborons avec des architectes de renom pour concevoir des espaces qui correspondent à vos besoins et à vos aspirations. Chaque projet est unique et bénéficie d'une attention particulière.",
      },
    ],
  },
  "3": {
    title: "Commercialisation",
    image: "/assets/images/img1.jpg",
    sections: [
      {
        title: "Stratégie de vente",
        content:
          "Nous développons une stratégie de commercialisation adaptée à votre projet pour maximiser sa visibilité et attirer les clients potentiels.",
      },
      {
        title: "Marketing",
        content:
          "Notre équipe marketing utilise les outils les plus modernes pour promouvoir votre bien immobilier et atteindre votre public cible.",
      },
    ],
  },
  "4": {
    title: "Suivi des travaux",
    image: "/assets/images/img4.jpg",
    sections: [
      {
        title: "Gestion de chantier",
        content:
          "Nous assurons le suivi rigoureux de l'avancement des travaux pour garantir le respect des délais et de la qualité d'exécution.",
      },
      {
        title: "Contrôle qualité",
        content:
          "Nos experts effectuent des contrôles réguliers pour s'assurer que les travaux sont réalisés conformément aux normes et aux spécifications du projet.",
      },
    ],
  },
  "5": {
    title: "Gestion Immobilière",
    image: "/assets/images/img5.jpg",
    sections: [
      {
        title: "Administration",
        content:
          "Nous prenons en charge l'administration complète de vos biens immobiliers, ce qui inclut la gestion des loyers, les relations avec les locataires et la maintenance.",
      },
      {
        title: "Optimisation",
        content:
          "Notre équipe travaille continuellement à l'optimisation de la rentabilité de vos investissements immobiliers à travers une gestion proactive et efficace.",
      },
    ],
  },
};

export default function ServicesPage() {
  const params = useParams();
  const router = useRouter();
  const [activeServiceId, setActiveServiceId] = useState<string>("1");
  const [serviceData, setServiceData] = useState(serviceContent["1"]);

  useEffect(() => {
    // Mettre à jour l'ID du service actif basé sur le paramètre de l'URL
    if (params.id && typeof params.id === "string") {
      setActiveServiceId(params.id);
      setServiceData(
        serviceContent[params.id as keyof typeof serviceContent] ||
          serviceContent["1"]
      );
    }
  }, [params.id]);

  // Fonction pour naviguer vers un service
  const navigateToService = (id: string) => {
    router.push(`/services/${id}`);
  };

  return (
    <div className="bg-white flex flex-col min-h-screen w-full">
      <div className="bg-white overflow-hidden w-full relative">
        <HeroSection
          title={serviceData.title}
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "Services", link: "/services" },
            {
              label: serviceData.title,
              link: `/services/${activeServiceId}`,
              isActive: true,
            },
          ]}
        />

        {/* Main Content Section */}
        <section className="relative w-full max-w-[1440px] mx-auto">
          <div className="relative px-4 md:px-8 lg:px-16 py-12 md:py-24">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
              {/* Services Sidebar */}
              <div className="w-full lg:w-[397px] flex flex-col gap-8">
                <Card className="shadow-[0px_0px_2px_#1f335940] rounded-[21px] border border-[#1F335940]/25">
                  <CardContent className="p-4 md:p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-[13px] h-[13px] rounded-[6.5px] bg-[#d99541] mr-2"></div>
                      <h2 className="font-['Elza_Text_Trial-Bold'] font-bold text-[#1f3359] text-[20px] md:text-[25px]">
                        Liste des services
                      </h2>
                    </div>

                    <div className="flex flex-col gap-3">
                      {servicesList.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => navigateToService(service.id)}
                          className={`flex items-center justify-between w-full h-[57px] rounded-[10px] px-4 transition-colors cursor-pointer ${
                            service.id === activeServiceId
                              ? "bg-[#d99541]"
                              : "bg-[#f1f0f0b0] hover:bg-[#f1f0f0]"
                          }`}
                        >
                          <span
                            className={`font-['Raleway'] font-bold ${
                              service.id === activeServiceId
                                ? "text-white"
                                : "text-[#1f3359]"
                            } text-base`}
                          >
                            {service.name}
                          </span>
                          <ChevronRightIcon
                            className={
                              service.id === activeServiceId ? "text-white" : ""
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Card */}
                <HandSection />
              </div>

              {/* Main Content */}
              <div className="flex-1">
                <img
                  className="w-full h-[300px] md:h-[450px] lg:h-[575px] object-cover rounded-lg"
                  alt={serviceData.title}
                  src={serviceData.image}
                />

                {serviceData.sections.map((section, index) => (
                  <div key={index} className="mt-12 md:mt-16">
                    <h2 className="font-['Raleway'] font-bold text-[#122e48] text-[40px] md:text-[58px] leading-[1.2] md:leading-[30px]">
                      {section.title}
                    </h2>
                    <p className="mt-6 md:mt-8 font-['Raleway'] text-[#122e48] text-base leading-[27px]">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

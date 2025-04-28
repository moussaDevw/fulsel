import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/app/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FinanceSimulator } from "@/app/components/Finance-Simulator";
export default function About() {
  // Team members data
  const teamMembers = [
    {
      name: "Adji Fall",
      role: "Assistante De Direction",
      image: "/assets/images/per2.jpg",
    },
    {
      name: "Amadou Seck",
      role: "Designer d'intérieur",
      image: "/assets/images/per1.jpg",
    },
    {
      name: "Coumba Sy",
      role: "Assistante De Direction",
      image: "/assets/images/per3.jpg",
    },
  ];

  // Values data
  const values = [
    {
      title: "Qualité",
      icon: "/assets/svgs/qualite.svg",
      description:
        "Notre objectif est de proposer des appartements clés-en-main de haut-standing. Chez Fulser Properties, la qualité est primordiale.",
    },
    {
      title: "Durabilité",
      icon: "/assets/svgs/durabilite.svg",
      description:
        "Fulser Properties s'engage à minimiser l'impact environnemental de ses projets en favorisant le cycle court et en optimisant l'efficacité énergétique de ses projets.",
    },
    {
      title: "INNOVATION",
      icon: "/assets/svgs/la-creativite.svg",
      description:
        "Nous proposons des constructions innovantes issues de la créativité d'architectes triés sur le volet.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div>
        <HeroSection
          title="A Propos"
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "A Propos", link: "/about", isActive: true },
          ]}
        />

        {/* About Us Section */}
        <section className="bg-gradient-radial from-[rgba(252,252,252,1)] to-[rgba(255,250,244,0.07)] py-10 sm:py-14 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-[1px] sm:tracking-[1.75px] leading-tight">
              <span className="text-[#1f3359]">A PROPOS </span>
              <span className="text-[#d99541]">DE NOUS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left image */}
            <div className="relative rounded-[20px] overflow-hidden">
              <img
                className="w-full h-full object-cover aspect-[1.17/1]"
                alt="About Fulser"
                src="/assets/images/apropos.jpg"
              />
              <div className="bg-gradient-to-b from-[rgba(31,51,89,0)] to-[rgba(31,51,89,0.47)] absolute inset-0"></div>
            </div>

            {/* Right content */}
            <div className="flex flex-col gap-4 sm:gap-5 mt-4 sm:mt-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="py-4 sm:py-5 px-4 sm:px-6 md:px-10 bg-white rounded-[16px] sm:rounded-[21px] shadow-[0px_4px_8px_2px_#d9954142] text-[#1f3359] font-bold text-sm sm:text-base tracking-[0.8px] sm:tracking-[1.12px] hover:no-underline cursor-pointer">
                    Histoire
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#efefef70] p-4 sm:p-6 mt-2">
                    <p className="font-normal text-black text-xs sm:text-sm leading-[24px] sm:leading-[27px]">
                      FULSER PROPERTIES : L'EXCELLENCE AU SERVICE DE
                      l'IMMOBILIER
                      <br /> Une vision audacieuse. Une exigence absolue. Une
                      signature d'exception.
                      <br /> Fulser Properties n'est pas une simple entreprise
                      de promotion immobilière. C'est une vision. Celle d'un
                      immobilier repensé, sublimé, où chaque projet incarne
                      l'innovation, la qualité et la durabilité.
                      <br /> Fondée par des experts aux parcours riches et
                      diversifiés, notre entreprise est née d'une ambition
                      commune : redéfinir les standards du haut de gamme et
                      créer des espaces d'exception.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-none mt-3 sm:mt-5"
                >
                  <AccordionTrigger className="py-4 sm:py-5 px-4 sm:px-6 md:px-10 bg-white rounded-[16px] sm:rounded-[21px] shadow-[0px_4px_8px_2px_#d9954142] text-[#1f3359] font-bold text-sm sm:text-base tracking-[0.8px] sm:tracking-[1.12px] hover:no-underline cursor-pointer">
                    Notre identité
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#efefef70] p-4 sm:p-6 mt-2">
                    <p className="font-normal text-black text-xs sm:text-sm leading-[24px] sm:leading-[27px]">
                      Notre identité est fondée sur l'excellence et l'innovation
                      dans le domaine immobilier.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-none mt-3 sm:mt-5"
                >
                  <AccordionTrigger className="py-4 sm:py-5 px-4 sm:px-6 md:px-10 bg-white rounded-[16px] sm:rounded-[21px] shadow-[0px_4px_8px_2px_#d9954142] text-[#1f3359] font-bold text-sm sm:text-base tracking-[0.8px] sm:tracking-[1.12px] hover:no-underline">
                    Notre approche
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#efefef70] p-4 sm:p-6 mt-2">
                    <p className="font-normal text-black text-xs sm:text-sm leading-[24px] sm:leading-[27px]">
                      Notre approche se distingue par une attention particulière
                      aux détails et un engagement envers la qualité.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-none mt-3 sm:mt-5"
                >
                  <AccordionTrigger className="py-4 sm:py-5 px-4 sm:px-6 md:px-10 bg-white rounded-[16px] sm:rounded-[21px] shadow-[0px_4px_8px_2px_#d9954142] text-[#1f3359] font-bold text-sm sm:text-base tracking-[0.8px] sm:tracking-[1.12px] hover:no-underline">
                    Notre mission
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#efefef70] p-4 sm:p-6 mt-2">
                    <p className="font-normal text-black text-xs sm:text-sm leading-[24px] sm:leading-[27px]">
                      Notre mission est de créer des espaces de vie
                      exceptionnels qui répondent aux attentes les plus
                      exigeantes.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-10 sm:py-14 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-[1px] sm:tracking-[1.75px] leading-tight">
              <span className="text-[#1f3359]">NOS </span>
              <span className="text-[#d99541]">VALEURS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="rounded-2xl sm:rounded-3xl border-none shadow-[0px_0px_7px_#1f335940]"
              >
                <CardContent className="flex flex-col items-center p-5 sm:p-8">
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <img
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover"
                      alt={value.title}
                      src={value.icon}
                    />
                    <h3 className="font-bold text-[#1f3359] text-lg sm:text-xl md:text-[25px] tracking-[1px] sm:tracking-[1.75px]">
                      {value.title}
                    </h3>
                  </div>
                  <p className="font-normal text-black text-xs sm:text-sm md:text-[15px] text-center tracking-[0.8px] sm:tracking-[1.05px] leading-6 sm:leading-7">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-[#faf8faba] py-10 sm:py-14 md:py-24 px-4 md:px-8 lg:px-16">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-[50px] font-black tracking-[1px] sm:tracking-[1.75px] leading-tight">
              <span className="text-[#1f3359]">NOTRE </span>
              <span className="text-[#d99541]">EQUIPE</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative rounded-[16px] sm:rounded-[21px] overflow-hidden"
              >
                <img
                  className="w-full object-cover"
                  alt={member.name}
                  src={member.image}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(196,196,196,0.02)] to-[rgba(31,51,89,0.81)] flex flex-col justify-end p-5 sm:p-8">
                  <h3 className="font-black text-white text-xl sm:text-2xl md:text-[25px] tracking-[1px] sm:tracking-[1.75px]">
                    {member.name}
                  </h3>
                  <p className="font-medium text-[#d99541] text-base sm:text-lg md:text-xl">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 sm:mt-10 gap-3 sm:gap-4">
            <div className="w-5 h-5 sm:w-[25px] sm:h-[25px] rounded-full sm:rounded-[12.5px] shadow-[0px_0px_7px_#00000040] bg-[#d99541]"></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-lg shadow-[0px_0px_7px_#00000040] bg-[#d99541]"></div>
            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-lg shadow-[0px_0px_7px_#00000040] bg-[#d99541]"></div>
          </div>
        </section>
        <FinanceSimulator className="mt-40 sm:mt-60" />
        <Footer />
      </div>
    </div>
  );
}

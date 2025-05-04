"use client";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { useRouter } from "next/navigation";

export const ServiceSection = () => {
  // Service card data for mapping
  const router = useRouter();
  const goToService = (serviceId: number | string) => {
    if (serviceId === "all") {
      router.push(`/services`);
      return;
    }

    router.push(`/services/${serviceId}`);
  };
  const serviceCards = [
    {
      id: "01",
      title: "RECHERCHE DE FONCIER",
      description:
        "Partenariats avec des propriétaires pour mise à disposition de leurs terrains. En contre-partie, le propriétaire reçoit un ou des lots dans le cadre du projet.",
      imageSrc: "/assets/images/img3.jpg",
      imagePosition: "bottom",
    },
    {
      id: "02",
      title: "ELABORATION DU PROJET",
      description:
        "Elaboration du projet immobilier selon la clientèle cible et selon le quartier en collaboration avec l'architecte. Construction clés en main.",
      imageSrc: "/assets/images/img4.jpg",
      imagePosition: "top",
    },
    {
      id: "03",
      title: "COMMERCIALISATION",
      description:
        "Vente en l'état futur d'achèvement (VEFA) qui permet une acquisition en douceur du bien par les futurs propriétaires.",
      imageSrc: "/assets/images/img5.jpg",
      imagePosition: "bottom",
    },
  ];

  return (
    <section className="w-full min-h-screen">
      <div className="relative w-full min-h-screen bg-[url(/assets/images/bg-service.jpg)] bg-cover bg-center">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-[#112B44]"></div>

        {/* Content container with relative positioning */}
        <div className="relative z-10">
          {/* Header */}
          <header className="pt-6 sm:pt-8 md:pt-12 text-center">
            <h1 className="font-['Sansita',Helvetica] font-black text-2xl sm:text-3xl md:text-4xl lg:text-[30px] xl:text-[45px] tracking-[2px] sm:tracking-[3.50px] leading-tight sm:leading-[87px]">
              <span className="text-white tracking-[1px] sm:tracking-[1.75px]">
                NOS
              </span>
              <span className="text-[#1f3359] tracking-[1px] sm:tracking-[1.75px]">
                &nbsp;
              </span>
              <span className="text-[#d99541] tracking-[1px] sm:tracking-[1.75px]">
                SERVICES
              </span>
            </h1>

            <p className="mt-3 sm:mt-4 mx-auto max-w-[891px] font-['Raleway',Helvetica] px-4 text-sm sm:text-base md:text-xl text-center sm:text-justify tracking-[0.5px] sm:tracking-[1.00px] leading-[24px] sm:leading-[30px]">
              <span className="font-bold text-white tracking-[0.15px] sm:tracking-[0.20px]">
                En plus de nos projets,{" "}
              </span>
              <span className="font-bold text-[#d99541] tracking-[0.15px] sm:tracking-[0.20px]">
                FULSER Properties
              </span>
              <span className="font-bold text-white tracking-[0.15px] sm:tracking-[0.20px]">
                {" "}
                propose un volet de services à ses clients.
              </span>
            </p>
          </header>

          {/* Service Cards */}
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16">
            {serviceCards.map((card, index) => (
              <Card
                key={card.id}
                className="h-[450px] sm:h-[500px] md:h-[560px] bg-[#122e48] py-0 rounded-xl shadow-[0px_0px_13px_2px_#ffffff36] overflow-hidden relative border-none mb-10"
              >
                <CardContent className="p-0 h-full flex flex-col">
                  {/* Conditional rendering based on image position */}
                  {card.imagePosition === "top" && (
                    <div className="w-full h-full overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${card.imageSrc})` }}
                      >
                        <div className="h-[180px] sm:h-[220px] md:h-[255px] w-full bg-[#d995411a]" />
                      </div>
                    </div>
                  )}

                  <div className="p-3 sm:p-4 md:p-5 flex-grow">
                    <div className="flex items-start">
                      <span className="font-['Raleway',Helvetica] font-extrabold text-[#fbfafa] text-[16px] sm:text-[20px] md:text-[22px] lg:text-[25px] xl:text-[63px] leading-[24px] sm:leading-[30px]">
                        {card.id}
                      </span>
                      <h2 className="ml-3 sm:ml-4 font-['Raleway',Helvetica] font-bold text-[#d99541] text-base sm:text-xs md:text-sm xl:text-[25px] leading-[24px] sm:leading-[30px]">
                        {card.title}
                      </h2>
                    </div>

                    <p className="mt-4 sm:mt-6 font-['Raleway',Helvetica] font-normal text-[#fbfafa] text-sm sm:text-xs md:text-sm xl:text-base leading-[24px] sm:leading-[30px]">
                      {card.description}
                    </p>

                    <Button
                      onClick={() => goToService(card.id)}
                      variant="outline"
                      className="mt-4 sm:mt-6 h-[36px] sm:h-[43px] w-[110px] sm:w-[126px] rounded-[46px] border-[#d99541] bg-[#122e48] font-['Raleway',Helvetica] font-bold text-[#fbfafa] text-[13px] sm:text-[15px] tracking-[0.5px] sm:tracking-[0.75px] cursor-pointer"
                    >
                      LIRE PLUS
                    </Button>
                  </div>

                  {card.imagePosition === "bottom" && (
                    <div className="w-full">
                      <img
                        className="w-full h-full object-cover"
                        alt="Service illustration"
                        src={card.imageSrc}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* See More Button */}
          <div className="flex justify-center mt-0 md:mt-12 pb-6 sm:pb-8">
            <Button
              onClick={() => goToService("all")}
              className="h-[36px] sm:h-[43px] w-[110px] sm:w-[126px] bg-copperOrange rounded-[46px] shadow-[0px_0px_11px_2px_#00000040] font-['Raleway',Helvetica] font-bold text-white text-[13px] sm:text-[15px] tracking-[0.5px] sm:tracking-[0.75px] cursor-pointer"
            >
              VOIR PLUS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

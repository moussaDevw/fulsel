"use client";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const SectionArticle = () => {
  // Blog article data for mapping
  const featuredArticles = [
    {
      id: 1,
      title: "Augmenter La Valeur De Son Bien Avant La Vente",
      date: "29 Février 2025",
      image: "/assets/images/artbg.jpg",
    },
    {
      id: 2,
      title: "Augmenter La Valeur De Son Bien Avant La Vente",
      date: "29 Février 2025",
      image: "/assets/images/artbg.jpg",
    },
  ];

  const sideArticles = [
    {
      id: 1,
      title: "Les 5 erreurs à éviter lors de l'achat d'un terrain",
      image: "/assets/images/art1.jpg",
    },
    {
      id: 2,
      title: "Construction ou achat : quel choix faire ?",
      image: "/assets/images/art2.jpg",
    },
    {
      id: 3,
      title: "Construire sa maison : par où commencer ?",
      image: "/assets/images/art3.jpg",
    },
  ];

  return (
    <main className="bg-[#FBF9F7] w-full py-6 sm:py-8 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <header className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-[1.5px] sm:tracking-[2px] md:tracking-[2.5px] lg:tracking-[2.75px] leading-tight sm:leading-[60px] md:leading-[65px] lg:leading-[70px] mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-center">
            <span className="text-[#1f3359] tracking-[0.75px] sm:tracking-[1px] md:tracking-[1.25px] lg:tracking-[1.4px]">
              ARTICLE{" "}
            </span>
            <span className="text-[#d99541] tracking-[0.75px] sm:tracking-[1px] md:tracking-[1.25px] lg:tracking-[1.4px]">
              BLOG
            </span>
          </h1>

          <p className="max-w-[800px] sm:max-w-[850px] md:max-w-[900px] lg:max-w-[900px] text-sm sm:text-base md:text-lg lg:text-[18px] font-bold text-[#1f3359] text-center tracking-[0.5px] sm:tracking-[0.75px] md:tracking-[0.85px] lg:tracking-[0.9px] leading-[20px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] font-['Raleway',Helvetica]">
            Restez informer sur l&apos;immobilier avec Fulser Properties :
            conseils, tendances et opportunités pour des investissements
            réussis.
          </p>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 sm:gap-6 md:gap-7 xl:gap-8 justify-center">
          {/* Featured articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-7 lg:gap-8 justify-center">
            {featuredArticles.map((article) => (
              <Card
                key={article.id}
                className="w-full h-[300px] sm:h-[320px] md:h-[350px] lg:h-[380px] p-0 bg-transparent border-0 relative overflow-hidden"
              >
                <CardContent className="p-0 h-full">
                  <div
                    className="w-full h-full bg-cover bg-center rounded-[15px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px]"
                    style={{ backgroundImage: `url(${article.image})` }}
                  >
                    <div className="absolute w-[calc(100%-12px)] sm:w-[calc(100%-14px)] md:w-[calc(100%-16px)] lg:w-[calc(100%-18px)] h-[calc(100%-12px)] sm:h-[calc(100%-14px)] md:h-[calc(100%-16px)] lg:h-[calc(100%-18px)] top-[6px] sm:top-[7px] md:top-[8px] lg:top-[9px] left-[6px] sm:left-[7px] md:left-[8px] lg:left-[9px] bg-[#1f335912] rounded-[15px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px]" />

                    {/* Date badge */}
                    <div className="absolute w-[130px] sm:w-[140px] md:w-[150px] lg:w-[160px] h-7 sm:h-8 md:h-9 lg:h-10 top-[70%] sm:top-[75%] md:top-[75%] lg:top-[75%] left-4 sm:left-6 md:left-8 lg:left-10 bg-[#d99541] rounded-md flex items-center justify-center">
                      <p className="font-['Montserrat',Helvetica] font-bold text-white text-sm sm:text-[15px] md:text-[16px] lg:text-[17px] text-center tracking-[0.6px] sm:tracking-[0.7px] md:tracking-[0.8px] lg:tracking-[0.85px] leading-[20px] sm:leading-[22px] md:leading-[24px] lg:leading-[26px]">
                        {article.date}
                      </p>
                    </div>

                    {/* Gradient overlay and title */}
                    <div className="absolute w-full h-[70px] sm:h-[80px] md:h-[85px] lg:h-[90px] left-0 right-0 bottom-0 rounded-[0px_0px_15px_15px] sm:rounded-[0px_0px_16px_16px] md:rounded-[0px_0px_18px_18px] lg:rounded-[0px_0px_20px_20px] bg-gradient-to-t from-[#1f3359] via-[rgba(31,51,89,0.56)] to-[rgba(31,51,89,0.05)]">
                      <h2 className="absolute w-[calc(100%-32px)] sm:w-[calc(100%-36px)] md:w-[calc(100%-40px)] lg:w-[calc(100%-44px)] bottom-[14px] sm:bottom-[16px] md:bottom-[18px] lg:bottom-[20px] left-4 sm:left-6 md:left-8 lg:left-10 font-['Raleway',Helvetica] font-semibold text-white text-base sm:text-lg md:text-[19px] lg:text-[20px] leading-tight sm:leading-[24px] md:leading-[26px] lg:leading-[28px]">
                        {article.title}
                      </h2>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Side articles */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-4 sm:mt-5 md:mt-6 lg:mt-0">
            {sideArticles.map((article) => (
              <Card
                key={article.id}
                className="flex border-0 bg-transparent p-0 h-full"
              >
                <CardContent className="flex flex-col  lg:flex-row gap-2 sm:gap-3 md:gap-2 p-0 h-full">
                  <img
                    className="w-full h-[180px] sm:w-[120px] sm:h-[100px] md:w-[140px] md:h-[120px] lg:w-[150px] lg:h-[130px] object-cover rounded-md"
                    alt={article.title}
                    src={article.image}
                  />
                  <div className="flex items-center py-2 sm:py-0 md:py-0 lg:py-0">
                    <h3 className="w-full font-['Raleway',Helvetica] font-extrabold text-[#1f3359] text-xs sm:text-sm md:text-[10px] xl:text-[15px] tracking-[0.4px] sm:tracking-[0.5px] md:tracking-[0.6px] lg:tracking-[0.65px] leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px]">
                      {article.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

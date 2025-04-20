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
    <main className="bg-[#FBF9F7] w-full py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <header className="flex flex-col items-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[2px] sm:tracking-[3.5px] leading-tight sm:leading-[87px] mb-4 sm:mb-6 md:mb-8 text-center">
            <span className="text-[#1f3359] tracking-[1px] sm:tracking-[1.75px]">
              ARTICLE{" "}
            </span>
            <span className="text-[#d99541] tracking-[1px] sm:tracking-[1.75px]">
              BLOG
            </span>
          </h1>

          <p className="max-w-[1050px] text-base sm:text-lg md:text-xl font-bold text-[#1f3359] text-center tracking-[0.5px] sm:tracking-[1.00px] leading-[24px] sm:leading-[30px] font-['Raleway',Helvetica]">
            Restez informer sur l&apos;immobilier avec Fulser Properties :
            conseils, tendances et opportunités pour des investissements
            réussis.
          </p>
        </header>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 justify-center">
          {/* Featured articles */}
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-10 justify-center">
            {featuredArticles.map((article) => (
              <Card
                key={article.id}
                className="w-full sm:w-[400px] md:w-[465px] h-[400px] sm:h-[500px] md:h-[571px] p-0 bg-transparent border-0 relative overflow-hidden"
              >
                <CardContent className="p-0 h-full">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${article.image})` }}
                  >
                    <div className="absolute w-[calc(100%-18px)] h-[calc(100%-18px)] top-[9px] left-[9px] bg-[#1f335912] rounded-[21px]" />

                    {/* Date badge */}
                    <div className="absolute w-[160px] sm:w-[180px] md:w-[199px] h-10 sm:h-12 top-[60%] sm:top-[363px] left-4 sm:left-[54px] bg-[#d99541] rounded-md flex items-center justify-center">
                      <p className="font-['Montserrat',Helvetica] font-bold text-white text-base sm:text-lg md:text-[21px] text-center tracking-[0.7px] sm:tracking-[1.05px] leading-[24px] sm:leading-[30px]">
                        {article.date}
                      </p>
                    </div>

                    {/* Gradient overlay and title */}
                    <div className="absolute w-full h-[100px] sm:h-[125px] left-0 right-0 bottom-0 rounded-[0px_0px_21px_21px] bg-gradient-to-t from-[#1f3359] via-[rgba(31,51,89,0.56)] to-[rgba(31,51,89,0.05)]">
                      <h2 className="absolute w-[calc(100%-40px)] sm:w-[360px] bottom-[20px] left-4 sm:left-[54px] font-['Raleway',Helvetica] font-semibold text-white text-lg sm:text-[22px] md:text-[26px] leading-tight sm:leading-[37px]">
                        {article.title}
                      </h2>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Side articles */}
          <div className="flex flex-col gap-4 sm:gap-6 mt-6 lg:mt-0">
            {sideArticles.map((article) => (
              <Card
                key={article.id}
                className="flex border-0 bg-transparent p-0"
              >
                <CardContent className="flex gap-3 sm:gap-4 p-0">
                  <img
                    className="w-[120px] h-[120px] sm:w-[170px] sm:h-[150px] md:w-[205px] md:h-[177px] object-cover"
                    alt={article.title}
                    src={article.image}
                  />
                  <div className="flex items-center">
                    <h3 className="w-full sm:w-[181px] font-['Raleway',Helvetica] font-extrabold text-[#1f3359] text-sm sm:text-base md:text-[17px] tracking-[0.5px] sm:tracking-[0.85px] leading-[24px] sm:leading-[30px]">
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

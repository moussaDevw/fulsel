"use client";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";

export const SectionArticle = () => {
  // Blog article data for mapping
  const featuredArticles = [
    {
      id: 1,
      title: "Augmenter la valeur de son bien avant la vente",
      date: "29 Février 2025",
      image: "/assets/images/artbg.jpg",
    },
    {
      id: 2,
      title: "Augmenter la valeur de son bien avant la vente",
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
            Restez informés sur l&apos;immobilier avec Fulser Properties :
            conseils, tendances et opportunités pour des investissements
            réussis.
          </p>
        </header>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 sm:gap-6 md:gap-7 xl:gap-8">
          {/* Featured articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-7 lg:gap-8">
            {featuredArticles.map((article) => (
              <Card
                key={article.id}
                className="w-full h-[280px] sm:h-[300px] md:h-[320px] lg:h-[340px] p-0 bg-transparent border-0 relative overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                <CardContent className="p-0 h-full relative">
                  <div className="w-full h-full rounded-[15px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full "
                    />
                  </div>

                  {/* Date badge */}
                  <div className="absolute top-5 left-5 bg-[#d99541] px-3 py-1 rounded text-white font-medium text-sm">
                    {article.date}
                  </div>

                  {/* Gradient overlay and title */}
                  <div className="absolute w-full h-[80px] left-0 right-0 bottom-0 rounded-b-[15px] sm:rounded-b-[16px] md:rounded-b-[18px] lg:rounded-b-[20px] bg-gradient-to-t from-[#1f3359] via-[rgba(31,51,89,0.8)] to-transparent flex items-end p-5">
                    <h2 className="font-['Raleway',Helvetica] font-semibold text-white text-base sm:text-lg md:text-[19px] lg:text-[20px] leading-tight">
                      {article.title}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Side articles */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-4">
            {sideArticles.map((article) => (
              <Card
                key={article.id}
                className="flex border-0 bg-transparent p-0 cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              >
                <CardContent className="flex flex-row gap-3 p-0 w-full">
                  <div className="min-w-[110px] w-[110px] h-[90px] sm:min-w-[120px] sm:w-[120px] sm:h-[100px] md:min-w-[130px] md:w-[130px] md:h-[110px] lg:min-w-[100px] lg:w-[100px] lg:h-[85px] xl:min-w-[120px] xl:w-[120px] xl:h-[100px] overflow-hidden rounded-md">
                    <img
                      className="w-full h-full object-cover"
                      alt={article.title}
                      src={article.image}
                    />
                  </div>
                  <div className="flex items-center py-1">
                    <h3 className="font-['Raleway',Helvetica] font-bold text-[#1f3359] text-sm sm:text-sm md:text-base lg:text-sm xl:text-base line-clamp-3">
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

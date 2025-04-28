"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Footer } from "@/app/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FinanceSimulator } from "@/app/components/Finance-Simulator";
import NavBar from "@/app/components/NavBar";

export default function Project() {
  const [activeTab, setActiveTab] = useState("espace-loisirs");

  // Project details data
  const projectDetails = [
    { label: "Nom du projet :", value: "Keur Marieme Mermoz" },
    { label: "Statut Projet :", value: "En Cours" },
    { label: "Date de début :", value: "Mars 2025" },
    { label: "Date de livraison :", value: "Décembre 2026" },
  ];

  // Apartment types data
  const apartmentTypes = [
    "11 studios F1",
    "4 appartements F3",
    "9 appartements F4",
    "1 Penthouse de 5 chambres",
  ];

  // Amenities data
  const amenities = [
    "Une entrée sécurisée 24H/24",
    "Une piscine sur la terrasse avec une vue imprenable",
    "Une salle de sport toute équipée avec sauna",
  ];

  // Gallery tabs data
  const galleryTabs = [
    { id: "espace-loisirs", label: "ESPACE LOISIRS" },
    { id: "appartement-f3", label: "APPARTEMENT F3" },
    { id: "appartement-f4", label: "APPARTEMENT F4" },
    { id: "hall", label: "HALL" },
    { id: "penthouse", label: "PENTHOUSE" },
    { id: "studios", label: "STUDIOS" },
  ];

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="w-full bg-white overflow-hidden relative">
        {/* NavBar fixe */}
        <NavBar />

        {/* Header Section */}
        <HeroSection
          title="Keur Marieme Mermoz"
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "Projets", link: "/projects", isActive: true },
          ]}
        />

        {/* Project Info Card */}
        <section className="relative w-full mt-8 md:mt-12 mx-auto max-w-[1440px] rounded-lg md:rounded-xl">
          <div className="px-3 md:px-0">
            <img
              className="w-full h-auto md:h-[500px] lg:h-[700px] object-cover rounded-lg md:rounded-xl"
              alt="Project Building"
              src="/assets/images/immeuble.jpg"
            />
          </div>

          <Card className="bg-white absolute w-[85%] md:w-[85%] lg:w-[80%] -bottom-[10%] left-1/2 transform -translate-x-1/2 rounded-lg md:rounded-xl shadow-md border-none">
            <CardContent className="grid grid-cols-2 gap-2 md:flex md:flex-row md:justify-between items-center py-4 md:py-6 px-4">
              {projectDetails.map((detail, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-start py-2 md:px-4 lg:px-8 relative">
                    <h3 className="font-raleway font-medium text-[#d99541] text-base md:text-lg lg:text-xl text-left">
                      {detail.label}
                    </h3>
                    <p className="font-raleway font-bold text-[#1f3359] text-sm md:text-base lg:text-lg mt-1 md:mt-2 text-left">
                      {detail.value}
                    </p>

                    {/* Séparateur vertical entre les colonnes sur mobile */}
                    {index % 2 === 0 && index < projectDetails.length - 1 && (
                      <div className="absolute h-1/2 w-[1px] bg-[#8E8E8E] right-0 top-1/3 md:hidden"></div>
                    )}

                    {/* Séparateur horizontal après la première rangée sur mobile */}
                    {/* {index < 2 && (
                      <div className="absolute w-full h-[1px] bg-[#8E8E8E] bottom-0 left-0 md:hidden"></div>
                    )} */}
                  </div>

                  {/* Séparateur vertical pour desktop */}
                  {index < projectDetails.length - 1 && (
                    <div className="hidden md:block h-16 lg:h-20 w-[1px] bg-[#8E8E8E]"></div>
                  )}
                </React.Fragment>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Presentation Section */}
        <section className="px-4 md:px-8 lg:px-1 mt-20 md:mt-35 max-w-[1440px] mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            <span className="font-black text-[#1f3359]">PRESENTATION </span>
            <span className="font-black text-[#d99541]">DU PROJET</span>
          </h2>

          <div className="font-raleway font-normal text-black text-base md:text-lg text-justify leading-relaxed space-y-4 mt-6">
            <p>
              Cette résidence est bien plus qu&apos;un projet immobilier.
              C&apos;est une vision incarnée de
              l&apos;accueil&nbsp;&nbsp;chaleureux, de l&apos;élégance et du
              confort que nous souhaitons vous faire vivre en ce lieu.
            </p>
            <p>
              Le nom de cette résidence est un hommage à une femme
              exceptionnelle symbole d&apos;amour, de&nbsp;&nbsp;bienveillance
              et de simplicité. En choisissant de devenir propriétaire d&apos;un
              appartement au sein de&nbsp;&nbsp;«Keur Marieme» vous vous
              inscrivez dans une expérience unique de sécurité, de confort et
              de&nbsp;&nbsp;prestige.
            </p>
            <p>
              Chaque détail architectural, chaque aménagement et chaque service
              offert ont été pensés avec une&nbsp;&nbsp;attention particulière
              pour créer un environnement où vous vous sentirez véritablement
              chez vous,&nbsp;&nbsp;entourés d&apos;un sentiment d&apos;harmonie
              et de sérénité.
            </p>
            <p>
              Les appartements que nous vous proposons offrent des prestations
              de haut standing dans un lieu&nbsp;&nbsp;idéal.
            </p>
            <p>
              Celles-ci se reflètent par des espaces de vie spacieux et
              modulables, des équipements modernes et&nbsp;&nbsp;de qualité,
              ainsi qu&apos;un niveau de finition d&apos;une rare exigence.
            </p>
            <p>
              Nous vous invitons à découvrir ce magnifique programme et nous
              vous donnons rendez-vous au&nbsp;&nbsp;2ème trimestre 2026 pour la
              livraison du projet.
            </p>
          </div>

          <Button className="px-6 py-3 mt-6 md:mt-8 rounded-full shadow-md bg-[#1f3359]">
            <span className="font-raleway font-bold text-white text-sm md:text-base">
              DEMANDER LA BROCHURE
            </span>
          </Button>
        </section>

        {/* Apartments Section */}
        <section className="px-4 md:px-8 lg:px-1 mt-8 md:mt-12 max-w-[1440px] mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            <span className="font-black text-[#1f3359]">LES </span>
            <span className="font-black text-[#d99541]">APPARTEMENT</span>
          </h2>

          <ul className="mt-4 md:mt-6 space-y-3 md:space-y-6">
            {apartmentTypes.map((type, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#d99541] mr-2" />
                <span className="font-raleway font-bold text-[#1f3359] text-base md:text-lg text-justify leading-relaxed">
                  {type}
                </span>
              </li>
            ))}
          </ul>

          <Button className="px-6 py-3 mt-6 md:mt-8 rounded-full shadow-md bg-[#1f3359]">
            <span className="font-raleway font-bold text-white text-sm md:text-base">
              VOIR LES PLANS
            </span>
          </Button>
        </section>

        {/* Amenities Section */}
        <section className="px-4 md:px-8 lg:px-1 mt-8 md:mt-12 max-w-[1440px] mx-auto">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            <span className="font-black text-[#1f3359]">LES </span>
            <span className="font-black text-[#d99541]">AMENAGEMENTS</span>
          </h2>

          <ul className="mt-4 md:mt-6 space-y-3 md:space-y-6">
            {amenities.map((amenity, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#d99541] mr-2" />
                <span className="font-raleway font-bold text-[#1f3359] text-base md:text-lg text-justify leading-relaxed">
                  {amenity}
                </span>
              </li>
            ))}
          </ul>

          <Button className="px-6 py-3 mt-6 md:mt-8 rounded-full shadow-md bg-[#1f3359]">
            <span className="font-raleway font-bold text-white text-sm md:text-base">
              VOIR LA LOCALISATION
            </span>
          </Button>
        </section>

        {/* Gallery Section */}
        <section className="w-full mt-[40px] bg-white lg:mb-[270px] max-w-[1440px] mx-auto">
          <h2 className="uppercase [font-family:'Elza_Trial-Black',Helvetica] font-black text-[#d99541] text-[35px] tracking-[2.45px] leading-[87px] text-center pt-5">
            Galerie
          </h2>

          <h3 className="[font-family:'Raleway',Helvetica] font-bold text-[#1f3359] text-[27px] text-center mt-4">
            Découvrez la résidence en images
          </h3>

          <Tabs
            defaultValue="espace-loisirs"
            className="w-full mt-[40px]"
            value={activeTab}
            onValueChange={handleTabChange}
          >
            <TabsList className="w-[900px] bg-transparent mx-auto flex justify-center space-x-4 mb-8">
              {galleryTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`${
                    activeTab === tab.id
                      ? "bg-[#1f3359] text-white"
                      : "bg-transparent text-[#b97726] cursor-pointer"
                  } rounded-[46px] border border-solid border-[#1f3359] px-4 py-2 [font-family:'Elza_Text_Trial-Bold',Helvetica] font-bold text-[15px] tracking-[0.75px]`}
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="w-full max-w-[1440px] mx-auto px-4">
              {/* Contenu pour Espace Loisirs */}
              <TabsContent value="espace-loisirs">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-4 justify-items-center">
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Espace loisirs 1"
                    src="/assets/images/projet1.png"
                  />
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Espace loisirs 2"
                    src="/assets/images/projet2.png"
                  />
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Appartement F3 1"
                    src="/assets/images/projet2.png"
                  />
                </div>
              </TabsContent>

              {/* Contenu pour Appartement F3 */}
              <TabsContent value="appartement-f3">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 justify-items-center">
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Appartement F3 1"
                    src="/assets/images/projet2.png"
                  />
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Appartement F3 2"
                    src="/assets/images/projet3.png"
                  />
                </div>
              </TabsContent>

              {/* Contenu pour Appartement F4 */}
              <TabsContent value="appartement-f4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 justify-items-center">
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Appartement F4 1"
                    src="/assets/images/projet3.png"
                  />
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Appartement F4 2"
                    src="/assets/images/projet1.png"
                  />
                </div>
              </TabsContent>

              {/* Contenu pour Hall */}
              <TabsContent value="hall">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 justify-items-center">
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Hall 1"
                    src="/assets/images/projet2.png"
                  />
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Hall 2"
                    src="/assets/images/projet1.png"
                  />
                </div>
              </TabsContent>

              {/* Contenu pour Penthouse */}
              <TabsContent value="penthouse">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 justify-items-center">
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Penthouse 1"
                    src="/assets/images/projet3.png"
                  />
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Penthouse 2"
                    src="/assets/images/projet2.png"
                  />
                </div>
              </TabsContent>

              {/* Contenu pour Studios */}
              <TabsContent value="studios">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 justify-items-center">
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Studio 1"
                    src="/assets/images/projet1.png"
                  />
                  <img
                    className="w-full md:w-full lg:w-[594px] h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px]"
                    alt="Studio 2"
                    src="/assets/images/projet3.png"
                  />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </section>

        <FinanceSimulator />

        <Footer />
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Footer } from "@/app/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { FinanceSimulator } from "@/app/components/Finance-Simulator";
import NavBar from "@/app/components/NavBar";
import { useParams, useRouter } from "next/navigation";
import { allProjects } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Plans data
const plans = [
  {
    name: "RDC",
    path: "/assets/images/keurMariem/pdf/PL_KARANGA_RDC.pdf",
    thumbnail: "/assets/images/keurMariem/hall.jpg",
  },
  {
    name: "ÉTAGE COURANT",
    path: "/assets/images/keurMariem/pdf/PL_KARANGA_ETAGE COURANT.pdf",
    thumbnail: "/assets/images/keurMariem/f4-1.jpg",
  },
  {
    name: "TERRASSE",
    path: "/assets/images/keurMariem/pdf/PL_KARANGA_TERRASSE.pdf",
    thumbnail: "/assets/images/keurMariem/espace1.png",
  },
  {
    name: "STUDIO 1",
    path: "/assets/images/keurMariem/pdf/PL_KARANGA_STUDIO 1.pdf",
    thumbnail: "/assets/images/keurMariem/studio1.jpg",
  },
  {
    name: "STUDIO 2",
    path: "/assets/images/keurMariem/pdf/PL_KARANGA_STUDIO 2.pdf",
    thumbnail: "/assets/images/keurMariem/studio2.jpg",
  },
  {
    name: "F3",
    path: "/assets/images/keurMariem/pdf/PL_KARANGA_F3.pdf",
    thumbnail: "/assets/images/keurMariem/f3-1.jpg",
  },
  {
    name: "PENTHOUSE",
    path: "/assets/images/keurMariem/pdf/PL_KARANGA_PENTHOUSE.pdf",
    thumbnail: "/assets/images/keurMariem/pen1.png",
  },
];

export default function Project() {
  const params = useParams();
  const router = useRouter();
  const currentProject = allProjects.find((p) => p.slug === params.slug);
  const [activeTab, setActiveTab] = useState(
    currentProject?.slug === "karenga-almadies" ? "FAÇADE" : "ESPACE LOISIRS"
  );

  if (!currentProject) {
    return <div>Projet non trouvé</div>;
  }

  // Si c'est un projet à venir, afficher un message spécial
  if (currentProject.status === "A venir") {
    return (
      <div className="bg-white min-h-screen">
        <NavBar />
        <HeroSection
          title={currentProject.title}
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "Projets", link: "/projets" },
            { label: currentProject.title, link: "#", isActive: true },
          ]}
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-[#1f3359] mb-6">
            Projet à venir
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Ce projet est actuellement en phase de développement. La
            commercialisation débutera en {currentProject.startDate}.
          </p>
          <Button
            onClick={() => router.push("/projets")}
            className="px-6 py-3 rounded-full shadow-md bg-[#B77625] hover:bg-[#965f1e] transition-colors duration-200 cursor-pointer"
          >
            <span className="font-raleway font-bold text-white text-sm md:text-base">
              RETOUR AUX PROJETS
            </span>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Project details data
  const projectDetails = [
    { label: "Nom du projet :", value: currentProject.title },
    { label: "Statut Projet :", value: currentProject.status },
    { label: "Date de début :", value: currentProject.startDate },
    { label: "Date de livraison :", value: currentProject.endDate },
  ];

  // Apartment types data
  const apartmentTypes = currentProject.apartmentTypes || [];

  // Amenities data
  const amenities = currentProject.amenities || [];

  // Gallery tabs data
  const galleryTabs = Object.keys(currentProject.gallery).map((key) => ({
    id: key,
    label: key,
  }));

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="w-full bg-white overflow-hidden relative">
        <NavBar />

        <HeroSection
          title={currentProject.title}
          breadcrumbs={[
            { label: "Accueil", link: "/" },
            { label: "Projets", link: "/projets" },
            { label: currentProject.title, link: "#", isActive: true },
          ]}
        />

        {/* Project Info Card */}
        <section className="container relative w-full mt-8 md:mt-12 mx-auto rounded-lg md:rounded-xl">
          <div className="px-3 md:px-0">
            <img
              className="w-full h-[500px] md:h-[500px] lg:h-[700px] object-cover rounded-lg md:rounded-xl"
              alt={currentProject.title}
              src={currentProject.image}
              loading="eager"
              style={{ imageRendering: "crisp-edges" }}
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
        <section className="container mt-20 md:mt-35">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            <span className="font-black text-[#1f3359]">PRESENTATION </span>
            <span className="font-black text-[#d99541]">DU PROJET</span>
          </h2>

          <div className="font-raleway font-normal text-black text-base md:text-lg text-justify leading-relaxed space-y-4 mt-6">
            {currentProject.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
            <a
              href={currentProject.brochureUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="px-6 py-3 rounded-full shadow-md bg-[#B77625] hover:bg-[#965f1e] transition-colors duration-200 cursor-pointer text-white">
                DEMANDER LA BROCHURE
              </Button>
            </a>
          </div>
        </section>

        {/* Apartments Section */}
        <section className="container mt-8 md:mt-12">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
            <span className="font-black text-[#1f3359]">LES </span>
            <span className="font-black text-[#d99541]">APPARTEMENTS</span>
          </h2>

          <ul className="mt-4 md:mt-6 space-y-3 md:space-y-6 mb-10">
            {apartmentTypes.map((type, index) => (
              <li key={index} className="flex items-center">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#d99541] mr-2" />
                <span className="font-raleway font-bold text-[#1f3359] text-base md:text-lg text-justify leading-relaxed">
                  {type}
                </span>
              </li>
            ))}
          </ul>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="px-6 py-3 rounded-full shadow-md bg-[#B77625] hover:bg-[#965f1e] transition-colors duration-200 cursor-pointer">
                <span className="font-raleway font-bold text-white text-sm md:text-base">
                  VOIR LES PLANS
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-full h-[80vh] bg-white overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-[#1f3359] mb-4">
                  Plans du projet
                </DialogTitle>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {plans.map((plan) => (
                  <a
                    key={plan.name}
                    href={plan.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white rounded-lg shadow hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
                  >
                    <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                      <img
                        src={plan.thumbnail}
                        alt={`Aperçu ${plan.name}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                        <span className="text-white font-bold">
                          Voir le plan
                        </span>
                      </div>
                    </div>
                    <div className="p-4 border-t">
                      <div className="flex items-center space-x-3">
                        <img
                          src="/assets/svgs/pdf-icon.svg"
                          alt="PDF"
                          className="w-6 h-6"
                        />
                        <span className="font-raleway font-medium text-[#1f3359]">
                          {plan.name}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </section>

        {/* Amenities Section */}
        <section className="container mt-8 md:mt-12">
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

          <Button
            onClick={() => window.open(currentProject.location, "_blank")}
            className="px-6 py-3 mt-6 md:mt-8 rounded-full shadow-md bg-[#B77625] hover:bg-[#965f1e] transition-colors duration-200 cursor-pointer"
          >
            <span className="font-raleway font-bold text-white text-sm md:text-base">
              VOIR LA LOCALISATION
            </span>
          </Button>
        </section>

        {/* Gallery Section */}
        <section className="container w-full mt-[40px] bg-white mb-30 lg:mb-[27px]">
          <h2 className="uppercase [font-family:'Elza_Trial-Black',Helvetica] font-black text-[#d99541] text-[35px] tracking-[2.45px] leading-[87px] text-center pt-5">
            Galerie
          </h2>

          <h3 className="[font-family:'Raleway',Helvetica] font-bold text-[#1f3359] text-[27px] text-center mt-4">
            Découvrez la résidence en images
          </h3>

          {/* Version Mobile */}
          <div className="lg:hidden mt-[40px] px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {galleryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`${
                    activeTab === tab.id
                      ? "bg-[#1f3359] text-white"
                      : "bg-transparent text-[#b97726] cursor-pointer"
                  } h-[43px] min-w-min rounded-[46px] border border-solid border-[#1f3359] px-4 py-2 [font-family:'Elza_Text_Trial-Bold',Helvetica] font-bold text-[15px] tracking-[0.75px]`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="mt-8">
              {Object.entries(currentProject.gallery).map(
                ([tabKey, images]) =>
                  tabKey === activeTab && (
                    <div key={tabKey} className="grid grid-cols-1 gap-6">
                      {images.map((image, index) => (
                        <img
                          key={index}
                          className="w-full h-[250px] object-cover rounded-[21px] mb-10"
                          alt={`${tabKey} ${index + 1}`}
                          src={image}
                        />
                      ))}
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Version Desktop */}
          <div className="hidden lg:block">
            <Tabs
              defaultValue={activeTab}
              className="w-full mt-[40px]"
              value={activeTab}
              onValueChange={handleTabChange}
            >
              <TabsList className="w-fit max-w-full flex bg-transparent mx-auto justify-center space-x-4 mb-8 px-4">
                {galleryTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className={`${
                      activeTab === tab.id
                        ? "bg-[#1f3359] text-white"
                        : "bg-transparent text-[#b97726] cursor-pointer"
                    } h-[43px] min-w-min rounded-[46px] border border-solid border-[#1f3359] px-4 py-2 [font-family:'Elza_Text_Trial-Bold',Helvetica] font-bold text-[15px] tracking-[0.75px]`}
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(currentProject.gallery).map(
                ([tabKey, images]) => (
                  <TabsContent key={tabKey} value={tabKey}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 justify-items-center mb-40">
                      {images.map((image, index) => (
                        <img
                          key={index}
                          className="w-full h-[250px] md:h-[300px] lg:h-[372px] object-cover rounded-[21px] mb-10"
                          alt={`${tabKey} ${index + 1}`}
                          src={image}
                        />
                      ))}
                    </div>
                  </TabsContent>
                )
              )}
            </Tabs>
          </div>
        </section>

        <FinanceSimulator className="!mb-0 bg-[#F5F4F2] mt-10 lg:py-40" />
        <Footer className="!mt-0" />
      </div>
    </div>
  );
}

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

// Types for the sections of service
interface ServiceSection {
  title: string;
  content: string;
  list?: string[];
  conclusion?: string;
}

interface ServiceData {
  title: string;
  image: string;
  sections: ServiceSection[];
}

// Contenu pour chaque service
const serviceContent: Record<string, ServiceData> = {
  "1": {
    title: "Recherche de foncier",
    image: "/assets/images/img3.jpg",
    sections: [
      {
        title: "Notre approche",
        content:
          "Chez FULSER PROPERTIES, nous facilitons la rencontre entre propriétaires fonciers et porteurs de projets immobiliers grâce à un réseau solide et bien établi. Notre service de recherche de foncier vise à identifier des terrains adaptés aux projets de nos partenaires promoteurs, en assurant une mise en relation stratégique avec des propriétaires motivés.",
      },
      {
        title: "Modèle gagnant-gagnant",
        content:
          "Nous proposons un modèle gagnant-gagnant : en mettant leur terrain à disposition, les propriétaires accèdent à une valorisation directe de leur patrimoine. En contrepartie de leur apport foncier, ils reçoivent une rétribution en lots issus du projet immobilier finalisé (terrains viabilisés, logements, etc.), selon des modalités claires et transparentes définies dès l'accord initial.",
      },
      {
        title: "Avantages du système",
        content: "Ce système innovant permet :",
        list: [
          "Aux promoteurs de sécuriser du foncier stratégique sans immobilisation immédiate de capitaux",
          "Aux propriétaires de devenir co-bénéficiaires du développement immobilier de leur bien",
          "À FULSER PROPERTIES d'assurer la fluidité, la négociation et le suivi du partenariat foncier",
        ],
        conclusion:
          "Nous sommes le trait d'union entre vision, opportunité et création de valeur immobilière.",
      },
    ],
  },
  "2": {
    title: "Élaboration de projets",
    image: "/assets/images/img2.jpg",
    sections: [
      {
        title: "Accompagnement complet",
        content:
          "FULSER PROPERTIES accompagne ses partenaires dans la conception et la structuration de projets immobiliers viables, durables et adaptés aux besoins du marché local. De l'idée à la faisabilité, nous intervenons à chaque étape clé pour transformer une opportunité foncière en un projet immobilier cohérent, rentable et maîtrisé.",
      },
      {
        title: "Approche pluridisciplinaire",
        content:
          "Grâce à une approche pluridisciplinaire et à une connaissance fine des réalités du terrain, nous construisons des solutions sur mesure, en lien avec les attentes des investisseurs, des usagers et des collectivités.",
      },
      {
        title: "Nos prestations",
        content: "Nos prestations incluent notamment :",
        list: [
          "L'analyse du potentiel foncier et des contraintes réglementaires",
          "La définition du programme immobilier (type de logements, équipements, mixité fonctionnelle…)",
          "La coordination des études techniques, juridiques, financières et environnementales",
          "La mobilisation de partenaires (architectes, bureaux d'études, financeurs, etc.)",
          "La préparation au lancement opérationnel du projet",
        ],
      },
      {
        title: "Chef d'orchestre",
        content:
          "FULSER PROPERTIES agit comme chef d'orchestre du projet en amont, en assurant sa cohérence stratégique, sa faisabilité économique et son ancrage territorial. Notre objectif : faire émerger des projets solides, porteurs de valeur ajoutée pour toutes les parties prenantes.",
      },
    ],
  },
  "3": {
    title: "Commercialisation",
    image: "/assets/images/img4.jpg",
    sections: [
      {
        title: "Stratégie sur mesure",
        content:
          "FULSER PROPERTIES prend en charge la commercialisation des projets immobiliers que nous accompagnons, avec pour objectif d'optimiser leur visibilité, d'accélérer les ventes et de maximiser la rentabilité pour nos partenaires. Notre équipe développe une stratégie de mise en marché sur mesure, adaptée au produit, à la cible et au contexte local.",
      },
      {
        title: "Accompagnement complet",
        content:
          "De la définition du positionnement à la signature des contrats, nous assurons un accompagnement complet et rigoureux.",
      },
      {
        title: "Nos actions",
        content: "Nos actions incluent :",
        list: [
          "L'étude de marché et la segmentation de la clientèle cible",
          "La définition du plan marketing et des supports de communication",
          "La mise en œuvre de campagnes promotionnelles (digitale, médias, terrain)",
          "La gestion des leads, des visites et des réservations",
          "Le suivi des ventes et la coordination avec les notaires et institutions",
        ],
      },
      {
        title: "Résultats garantis",
        content:
          "Grâce à notre réseau, notre expertise terrain et notre approche orientée résultats, nous assurons une commercialisation dynamique et sécurisée, au service du succès du projet.",
      },
    ],
  },
  "4": {
    title: "Suivi des travaux",
    image: "/assets/images/se2.jpg",
    sections: [
      {
        title: "Suivi technique et administratif",
        content:
          "FULSER PROPERTIES assure le suivi technique et administratif des chantiers immobiliers pour garantir la qualité, le respect des délais et la maîtrise des coûts. Nous représentons les intérêts du maître d'ouvrage tout au long de la phase de réalisation, en coordination étroite avec les constructeurs, les bureaux de contrôle et les autorités compétentes.",
      },
      {
        title: "Nos missions",
        content: "Nos missions incluent :",
        list: [
          "La planification et le suivi de l'avancement des travaux",
          "Le contrôle de la conformité aux plans, aux normes et au cahier des charges",
          "La coordination des différents intervenants sur site",
          "La gestion des aléas et la résolution des problématiques techniques",
          "La réception des ouvrages et le suivi des levées de réserves",
        ],
      },
      {
        title: "Exigence qualité",
        content:
          "Notre présence régulière sur le terrain et notre exigence en matière de qualité nous permettent de livrer des projets fiables, durables et conformes aux engagements pris.",
      },
    ],
  },
  "5": {
    title: "Gestion immobilière",
    image: "/assets/images/se1.jpg",
    sections: [
      {
        title: "Valorisation continue",
        content:
          "FULSER PROPERTIES propose un service de gestion immobilière pour assurer la valorisation continue du patrimoine bâti en prenant en charge la gestion locative ou administrative des biens, avec une approche rigoureuse, transparente et orientée satisfaction client.",
      },
      {
        title: "Nos prestations",
        content: "Nos prestations comprennent :",
        list: [
          "La mise en location et la sélection des locataires",
          "L'encaissement des loyers et la gestion des charges",
          "Le suivi de l'entretien courant et des interventions techniques",
          "La relation avec les copropriétés ou syndicats",
          "La gestion des contentieux ou impayés si nécessaire",
        ],
      },
      {
        title: "Gestion professionnelle",
        content:
          "Que ce soit pour un investisseur individuel, un bailleur institutionnel ou une copropriété, nous garantissons une gestion professionnelle et réactive, permettant de pérenniser les revenus locatifs et la qualité des actifs.",
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
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
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
          <section className="relative w-full">
            <div className="container py-12 md:py-24">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                {/* Services Sidebar */}
                <div className="w-full lg:w-[397px] flex flex-col gap-8">
                  <Card className="shadow-[0px_0px_2px_#1f335940] rounded-[21px] border border-[#1F335940]/25">
                    <CardContent className="p-4 md:p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-[13px] h-[13px] rounded-[6.5px] bg-[#d99541] mr-2"></div>
                        <h2 className=" font-bold text-[#1f3359] text-[20px] md:text-[25px]">
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
                              className={` font-bold ${
                                service.id === activeServiceId
                                  ? "text-white"
                                  : "text-[#1f3359]"
                              } text-base`}
                            >
                              {service.name}
                            </span>
                            <ChevronRightIcon
                              className={
                                service.id === activeServiceId
                                  ? "text-white"
                                  : ""
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
                    className="w-full h-[300px] md:h-[450px] lg:h-[575px] object-cover rounded-lg opacity-0 animate-fadeInUp"
                    style={{
                      animationDelay: "0.1s",
                      animationFillMode: "forwards",
                    }}
                    alt={serviceData.title}
                    src={serviceData.image}
                  />

                  {serviceData.sections.map((section, index) => (
                    <div
                      key={index}
                      className="mt-12 md:mt-16 opacity-0 animate-fadeInUp"
                      style={{
                        animationDelay: `${index * 0.2}s`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-[#d99541] rounded-full text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <h2 className="font-bold text-[#122e48] text-[24px] md:text-[32px] leading-tight">
                          {section.title}
                        </h2>
                      </div>
                      <p className="mt-4 text-[#122e48] text-base leading-[27px] ml-14">
                        {section.content}
                      </p>
                      {section.list && (
                        <ul className="mt-4 space-y-3 list-none ml-14">
                          {section.list.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <div className="w-2 h-2 rounded-full bg-[#d99541] mr-3 mt-2 flex-shrink-0" />
                              <span className="text-[#122e48] text-base leading-[27px]">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.conclusion && (
                        <p className="mt-4 text-[#122e48] text-base leading-[27px] font-medium ml-14">
                          {section.conclusion}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

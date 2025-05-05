export interface Project {
  id: number;
  title: string;
  image: string;
  slug: string;
  status: "En cours" | "A venir";
  startDate: string;
  endDate: string;
  description: string[];
  apartmentTypes?: string[];
  amenities?: string[];
  brochureUrl?: string;
  location?: string;
  gallery: {
    [key: string]: string[];
  };
}

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Keur Marieme, Mermoz",
    image: "/assets/images/keurMariem/keurmariem.jpg",
    slug: "keur-marieme-mermoz",
    status: "En cours",
    startDate: "Mars 2025",
    endDate: "Décembre 2026",
    location: "https://maps.google.com/?q=14.707225,-17.472507",
    brochureUrl:
      "http://bronchure-pdf.fulserproperties.com/brochurekeurmariem.pdf",
    apartmentTypes: [
      "11 studios F1",
      "4 appartements F3",
      "9 appartements F4",
      "1 Penthouse de 5 chambres",
    ],
    amenities: [
      "Une entrée sécurisée 24H/24",
      "Une piscine sur la terrasse avec une vue imprenable",
      "Une salle de sport toute équipée avec sauna",
    ],
    description: [
      "Cette résidence est bien plus qu'un projet immobilier. C'est une vision incarnée de l'accueil chaleureux, de l'élégance et du confort que nous souhaitons vous faire vivre en ce lieu.",
      "Le nom de cette résidence est un hommage à une femme exceptionnelle symbole d'amour, de bienveillance et de simplicité. En choisissant de devenir propriétaire d'un appartement au sein de «Keur Marieme» vous vous inscrivez dans une expérience unique de sécurité, de confort et de prestige.",
      "Chaque détail architectural, chaque aménagement et chaque service offert ont été pensés avec une attention particulière pour créer un environnement où vous vous sentirez véritablement chez vous, entourés d'un sentiment d'harmonie et de sérénité.",
      "Les appartements que nous vous proposons offrent des prestations de haut standing dans un lieu idéal.",
      "Celles-ci se reflètent par des espaces de vie spacieux et modulables, des équipements modernes et de qualité, ainsi qu'un niveau de finition d'une rare exigence.",
      "Nous vous invitons à découvrir ce magnifique programme et nous vous donnons rendez-vous au 2ème trimestre 2026 pour la livraison du projet.",
    ],
    gallery: {
      "ESPACE LOISIRS": [
        "/assets/images/keurMariem/espace1.png",
        "/assets/images/keurMariem/espace2.png",
        "/assets/images/keurMariem/espace3.png",
      ],
      "APPARTEMENT F3": [
        "/assets/images/keurMariem/f3-1.jpg",
        "/assets/images/keurMariem/f3-2.png",
      ],
      "APPARTEMENT F4": [
        "/assets/images/keurMariem/f4-1.jpg",
        "/assets/images/keurMariem/f4-2.jpg",
        "/assets/images/keurMariem/f4-3.jpg",
        "/assets/images/keurMariem/f4-4.jpg",
        "/assets/images/keurMariem/f4-5.jpg",
        "/assets/images/keurMariem/f4-6.jpg",
      ],
      HALL: ["/assets/images/keurMariem/hall.jpg"],
      PENTHOUSE: [
        "/assets/images/keurMariem/pen1.png",
        "/assets/images/keurMariem/pen2.png",
        "/assets/images/keurMariem/pen3.png",
        "/assets/images/keurMariem/pen4.png",
        "/assets/images/keurMariem/pen5.png",
        "/assets/images/keurMariem/pen6.jpg",
      ],
      STUDIOS: [
        "/assets/images/keurMariem/studio1.jpg",
        "/assets/images/keurMariem/studio2.jpg",
        "/assets/images/keurMariem/studio3.jpg",
      ],
    },
  },
  {
    id: 2,
    title: "Karenga, Almadies",
    image: "/assets/images/karenga/Facade-nuit-final.jpg",
    slug: "karenga-almadies",
    status: "En cours",
    startDate: "Mars 2025",
    endDate: "Décembre 2026",
    apartmentTypes: ["18 studios F2", "9 appartements F3", "1 Penthouse"],
    amenities: [
      "Une entrée sécurisée 24H/24",
      "Une piscine à débordement sur la terrasse",
      "Une salle de sport toute équipée avec sauna",
    ],
    description: [
      "Idéalement située dans le quartier prisé des Almadies de Dakar, la résidence Karenga bénéficie d'un cadre exceptionnel. La résidence est située à proximité immédiate des boutiques et restaurants prisés de la capitale, et de toutes les commodités indispensables à une vie urbaine confortable.",
      "Cette localisation strategique saura séduire une clientèle exigeante à la recherche d'un cadre de vie alliant praticité et raffinement.",
    ],
    gallery: {
      FAÇADE: [
        "/assets/images/karenga/Facade-nuit-final.jpg",
        "/assets/images/karenga/facade-matin220gig-gigapixel-art-scale-2_00x (1).jpg",
        "/assets/images/karenga/facade-v2-final.jpg",
        "/assets/images/karenga/facade.jpg",
      ],
      STUDIOS: [
        "/assets/images/karenga/ch studio.jpg",
        "/assets/images/karenga/studio 1 ET 2jpg.jpg",
        "/assets/images/karenga/sdbstudio 1.jpg",
      ],
      PENTHOUSE: [
        "/assets/images/karenga/cuisine penthouse.jpg",
        "/assets/images/karenga/cuisine penthouse2.jpg",
        "/assets/images/karenga/sdb penthouse.jpg",
        "/assets/images/karenga/terrasse penthouse.jpg",
      ],
      "ESPACES COMMUNS": [
        "/assets/images/karenga/entree hall.jpg",
        "/assets/images/karenga/terrasse.jpg",
      ],
      SÉJOUR: [
        "/assets/images/karenga/salon-2_Post-av-gig-gigapixel-art-scale-2_00x.jpg",
        "/assets/images/karenga/sejour.jpg",
      ],
    },
  },
  {
    id: 3,
    title: "Buur sine, Point E",
    image: "/assets/images/img9.jpg",
    status: "A venir",
    slug: "buur-sine-point-e",
    startDate: "2025",
    endDate: "2027",
    description: [
      "Un nouveau projet résidentiel de standing au cœur du Point E.",
    ],
    gallery: {},
  },
  {
    id: 4,
    title: "Galé Sira, Virage",
    image: "/assets/images/img9.jpg",
    status: "A venir",
    slug: "gale-sira-virage",
    startDate: "2026",
    endDate: "2028",
    description: ["Une résidence exclusive avec vue sur l'océan au Virage."],
    gallery: {},
  },
];

export interface Project {
  id: number;
  title: string;
  image: string;
  slug: string;
  status: "En cours" | "A venir";
  startDate: string;
  endDate: string;
  description: string;
  gallery: {
    [key: string]: string[];
  };
}

export const allProjects: Project[] = [
  {
    id: 1,
    title: "Keur Marieme, Mermoz",
    image: "/assets/images/keurMariem/espace1.png",
    slug: "keur-marieme-mermoz",
    status: "En cours",
    startDate: "Mars 2025",
    endDate: "Décembre 2026",
    description:
      "Cette résidence est bien plus qu'un projet immobilier. C'est une vision incarnée de l'accueil  chaleureux, de l'élégance et du confort que nous souhaitons vous faire vivre en ce lieu.\n\n" +
      "Le nom de cette résidence est un hommage à une femme exceptionnelle symbole d'amour, de  bienveillance et de simplicité. En choisissant de devenir propriétaire d'un appartement au sein de  «Keur Marieme» vous vous inscrivez dans une expérience unique de sécurité, de confort et de  prestige.\n\n" +
      "Chaque détail architectural, chaque aménagement et chaque service offert ont été pensés avec une  attention particulière pour créer un environnement où vous vous sentirez véritablement chez vous,  entourés d'un sentiment d'harmonie et de sérénité.\n\n" +
      "Les appartements que nous vous proposons offrent des prestations de haut standing dans un lieu  idéal.\n\n" +
      "Celles-ci se reflètent par des espaces de vie spacieux et modulables, des équipements modernes et  de qualité, ainsi qu'un niveau de finition d'une rare exigence.\n\n" +
      "Nous vous invitons à découvrir ce magnifique programme et nous vous donnons rendez-vous au  2ème trimestre 2026 pour la livraison du projet.",
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
    title: "Buur sine, Point E",
    image: "/assets/images/img9.jpg",
    status: "A venir",
    slug: "buur-sine-point-e",
    startDate: "2025",
    endDate: "2027",
    description:
      "Un nouveau projet résidentiel de standing au cœur du Point E.",
    gallery: {},
  },
  {
    id: 3,
    title: "Galé Sira, Virage",
    image: "/assets/images/img9.jpg",
    status: "A venir",
    slug: "gale-sira-virage",
    startDate: "2026",
    endDate: "2028",
    description: "Une résidence exclusive avec vue sur l'océan au Virage.",
    gallery: {},
  },
];

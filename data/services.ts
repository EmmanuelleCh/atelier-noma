export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  details: string[];
  idealFor: string;
};

export const services: Service[] = [
  {
    id: "conseil-decoration",
    number: "01",
    title: "Conseil en décoration",
    description:
      "Révéler le potentiel de votre intérieur grâce à une réflexion sur les couleurs, les matières, le mobilier et la lumière.",
    details: [
      "Analyse de vos besoins et de vos envies",
      "Palette de couleurs et sélection de matières",
      "Conseils mobilier et décoration",
    ],
    idealFor:
      "Celles et ceux qui souhaitent transformer leur intérieur sans entreprendre de gros travaux.",
  },
  {
    id: "renovation",
    number: "02",
    title: "Rénovation & aménagement",
    description:
      "Repenser les volumes et les circulations pour créer un lieu fonctionnel, harmonieux et adapté à votre quotidien.",
    details: [
      "Étude des espaces et des usages",
      "Propositions d'aménagement",
      "Sélection de matériaux et de finitions",
    ],
    idealFor:
      "Les propriétaires qui rénovent un appartement, une maison ou un bien récemment acquis.",
  },
  {
    id: "espaces-professionnels",
    number: "03",
    title: "Espaces professionnels",
    description:
      "Concevoir des espaces accueillants et cohérents avec l'identité de votre activité et l'expérience que vous souhaitez proposer.",
    details: [
      "Analyse des besoins et des contraintes",
      "Réflexion sur l'identité des lieux",
      "Aménagement et sélection des finitions",
    ],
    idealFor:
      "Les indépendants, commerces et petites entreprises qui souhaitent repenser leurs locaux.",
  },
];

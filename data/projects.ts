export type Project = {
  id: string;
  title: string;
  category: string;
  type: "Particulier" | "Professionnel";
  image: string;
  alt: string;
  description: string;
};

export const projects: Project[] = [
  {
    id: "maison-l",
    title: "Maison L",
    category: "Rénovation",
    type: "Particulier",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    alt: "Salon lumineux aux matières naturelles",
    description:
      "Une maison familiale repensée autour de la lumière et des matières naturelles.",
  },
  {
    id: "appartement-b",
    title: "Appartement B",
    category: "Aménagement",
    type: "Particulier",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    alt: "Intérieur contemporain aux tons beige et bois",
    description:
      "Un appartement bordelais aux lignes épurées et aux tonalités chaleureuses.",
  },
  {
    id: "espace-nova",
    title: "Espace Nova",
    category: "Aménagement",
    type: "Professionnel",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    alt: "Espace de travail contemporain et lumineux",
    description:
      "Un espace professionnel conçu pour favoriser le bien-être et la créativité.",
  },
];

// Demo projects. All businesses are fictional and always labelled "démo".

export type Project = {
  slug: string;
  name: string;
  sector: string;
  town: string;
  domain: string;
  bg: string;
  fg: string;
  accent: string;
  headline: string;
  cta: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "toitures-lambert",
    name: "Toitures Lambert",
    sector: "Toiture",
    town: "Wavre",
    domain: "toitures-lambert.be",
    bg: "#1d2a24",
    fg: "#f1efe6",
    accent: "#e8a33d",
    headline: "Votre toit, refait sans mauvaise surprise.",
    cta: "Devis en 48 h",
    tags: ["Devis en ligne", "Galerie avant/après", "Zones desservies"],
  },
  {
    slug: "cabinet-moreau",
    name: "Cabinet Moreau",
    sector: "Comptable",
    town: "Ottignies",
    domain: "cabinet-moreau.be",
    bg: "#f4f1ea",
    fg: "#1b1f2a",
    accent: "#1f4e79",
    headline: "Votre comptabilité, claire chaque trimestre.",
    cta: "Prendre rendez-vous",
    tags: ["Prise de RDV", "Espace documents", "FAQ fiscale"],
  },
  {
    slug: "volt-electricite",
    name: "Volt Électricité",
    sector: "Électricien",
    town: "Rixensart",
    domain: "volt-electricite.be",
    bg: "#111318",
    fg: "#f5f5f2",
    accent: "#ffd23f",
    headline: "Installation, mise en conformité, dépannage.",
    cta: "Appeler maintenant",
    tags: ["Appel en un clic", "Urgences 7j/7", "Contrôle RGIE"],
  },
  {
    slug: "dr-leroy",
    name: "Dr Leroy",
    sector: "Dentiste",
    town: "Louvain-la-Neuve",
    domain: "dr-leroy-dentiste.be",
    bg: "#eef5f4",
    fg: "#16302e",
    accent: "#2a9d8f",
    headline: "Des soins dentaires doux, pour toute la famille.",
    cta: "Réserver un créneau",
    tags: ["Réservation en ligne", "Soins & tarifs", "Accès & parking"],
  },
  {
    slug: "piscines-du-brabant",
    name: "Piscines du Brabant",
    sector: "Piscines",
    town: "Grez-Doiceau",
    domain: "piscines-du-brabant.be",
    bg: "#0b3954",
    fg: "#eaf6fb",
    accent: "#5fd3f3",
    headline: "La piscine dont vous rêvez, posée avant l’été.",
    cta: "Demander une étude",
    tags: ["Configurateur", "Réalisations", "Entretien annuel"],
  },
];

// Six small cards for the hero orbit (sixth is a generic "you" slot).
export const orbitCards = [
  ...projects.map((p) => ({ name: p.name, sector: p.sector, bg: p.bg, fg: p.fg, accent: p.accent })),
  { name: "Immo Delvaux", sector: "Immobilier", bg: "#f3e9e2", fg: "#2b1d16", accent: "#b5532f" },
];

// Single source of truth for prices, contact details and navigation.
// Bracketed values are placeholders: Filip must provide them. Never guess.

export const site = {
  name: "FDC Webdesign",
  // Placeholder until the .be domain is bought; override with NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fdc-webdesign.pages.dev",
  locality: "Wavre",
  region: "Brabant wallon",
  areaServed: ["Brabant wallon", "Bruxelles"],
  email: "[EMAIL]",
  phone: "[TÉLÉPHONE]",
  vat: "[BE0XXX.XXX.XXX]",
  launchSpots: 3,
} as const;

export const nav = [
  { href: "/realisations/", label: "Réalisations" },
  { href: "/offres/", label: "Offres" },
  { href: "/a-propos/", label: "À propos" },
  { href: "/contact/", label: "Contact" },
] as const;

export const legalLinks = [
  { href: "/mentions-legales/", label: "Mentions légales" },
  { href: "/confidentialite/", label: "Confidentialité" },
  { href: "/conditions/", label: "Conditions générales" },
] as const;

export const setupFee = "[790]";

export type Plan = {
  id: "essentiel" | "pro" | "premium";
  name: string;
  price: string; // €/mois HTVA
  pitch: string;
  features: string[];
  featured?: boolean;
  availableWithoutSetup: boolean;
};

export const plans: Plan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    price: "[59]",
    pitch: "Une présence propre et rapide pour être trouvé.",
    features: ["Site vitrine jusqu’à 5 pages", "Hébergement & SSL inclus", "Mises à jour de sécurité", "1 modification par mois"],
    availableWithoutSetup: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "[99]",
    pitch: "Le site qui fait sonner le téléphone.",
    features: [
      "Site jusqu’à 10 pages",
      "Hébergement & SSL inclus",
      "Référencement local (Google)",
      "Formulaire de demande de devis",
      "3 modifications par mois",
    ],
    featured: true,
    availableWithoutSetup: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "[149]",
    pitch: "Pour aller chercher plus de clients, chaque mois.",
    features: [
      "Pages illimitées",
      "Tout le plan Pro",
      "Pages locales par commune",
      "Rapport mensuel de visites",
      "Modifications illimitées",
    ],
    availableWithoutSetup: true,
  },
];

export const comparison: { label: string; values: [string, string, string] }[] = [
  { label: "Nombre de pages", values: ["5", "10", "Illimité"] },
  { label: "Hébergement & SSL", values: ["✓", "✓", "✓"] },
  { label: "Nom de domaine .be", values: ["✓", "✓", "✓"] },
  { label: "Mises à jour de sécurité", values: ["✓", "✓", "✓"] },
  { label: "Modifications / mois", values: ["1", "3", "Illimité"] },
  { label: "Référencement local", values: ["—", "✓", "✓"] },
  { label: "Formulaire de devis", values: ["—", "✓", "✓"] },
  { label: "Pages par commune", values: ["—", "—", "✓"] },
  { label: "Rapport mensuel", values: ["—", "—", "✓"] },
  { label: "Formule sans apport", values: ["—", "✓", "✓"] },
];

export const faq: { q: string; a: string }[] = [
  { q: "Combien de temps faut-il pour mettre mon site en ligne ?", a: "14 jours après validation de la maquette, à condition d’avoir reçu vos textes et photos." },
  { q: "La maquette est-elle vraiment gratuite ?", a: "Oui. Vous recevez une maquette de votre page d’accueil en 72 h, sans engagement. Si elle ne vous plaît pas, vous ne payez rien." },
  { q: "Que se passe-t-il si j’arrête l’abonnement ?", a: "[À préciser : conditions de résiliation et de récupération du site]" },
  { q: "Y a-t-il une durée minimale d’engagement ?", a: "[À préciser : durée minimale, notamment pour la formule sans apport]" },
  { q: "Le nom de domaine m’appartient-il ?", a: "[À préciser : propriété du nom de domaine et transfert]" },
  { q: "Les prix sont-ils HTVA ?", a: "Oui, tous les prix affichés sont hors TVA." },
];

export const sectors = [
  "Toiture",
  "Électricité",
  "Plomberie",
  "HVAC",
  "Rénovation",
  "Piscines",
  "Comptables",
  "Avocats",
  "Dentistes",
  "Immobilier",
] as const;

export const towns = [
  "Wavre",
  "Ottignies",
  "Louvain-la-Neuve",
  "Rixensart",
  "Grez-Doiceau",
  "Chaumont-Gistoux",
  "Overijse",
  "Waterloo",
  "Braine-l’Alleud",
  "Jodoigne",
  "Bruxelles",
] as const;

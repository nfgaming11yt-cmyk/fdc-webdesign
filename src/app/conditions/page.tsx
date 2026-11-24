import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { setupFee } from "@/content/site";

export const metadata: Metadata = {
  title: "Conditions générales",
  description: "Conditions générales de FDC Webdesign : abonnement mensuel, formule sans apport, durée minimale, résiliation et propriété du site.",
  alternates: { canonical: "/conditions/" },
};

export default function Conditions() {
  return (
    <LegalPage title="Conditions générales">
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions encadrent la création, l’hébergement et la maintenance de sites web par FDC Webdesign sous forme d’abonnement
        mensuel.
      </p>
      <h2>2. Maquette gratuite</h2>
      <p>
        La maquette de page d’accueil est offerte et n’engage le client à rien. Elle reste la propriété de FDC Webdesign tant qu’aucun contrat
        n’est signé.
      </p>
      <h2>3. Formules et prix</h2>
      <ul>
        <li>Création + abonnement : frais de création uniques de {setupFee}&nbsp;€ HTVA, puis abonnement mensuel selon la formule choisie.</li>
        <li>Sans apport : pas de frais de création, abonnement mensuel avec une durée minimale d’engagement de [À préciser] mois.</li>
        <li>Tous les prix sont exprimés hors TVA. [À préciser : modalités et échéances de paiement.]</li>
      </ul>
      <h2>4. Délais</h2>
      <p>
        Le site est mis en ligne dans les 14 jours suivant la validation de la maquette, sous réserve de la réception des contenus (textes,
        photos, logo) fournis par le client.
      </p>
      <h2>5. Résiliation</h2>
      <p>[À préciser : préavis, résiliation pendant la durée minimale (formule sans apport), sort du site et du nom de domaine.]</p>
      <h2>6. Propriété du site</h2>
      <p>[À préciser : propriété du design, du code et des contenus selon la formule, conditions de transfert.]</p>
      <h2>7. Droit applicable</h2>
      <p>Droit belge. [À préciser : tribunaux compétents.]</p>
    </LegalPage>
  );
}

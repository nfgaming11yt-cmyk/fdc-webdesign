import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment FDC Webdesign traite les données envoyées via le formulaire de contact : finalité, sous-traitant, durée de conservation et vos droits (RGPD).",
  alternates: { canonical: "/confidentialite/" },
};

export default function Confidentialite() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Responsable du traitement</h2>
      <p>
        FDC Webdesign, [adresse], {site.locality}, Belgique, {site.vat}. Contact : {site.email}.
      </p>
      <h2>Données collectées</h2>
      <p>
        Via le formulaire de contact : votre nom, le nom de votre entreprise, votre adresse e-mail, votre secteur et, si vous le donnez,
        l’adresse de votre site actuel.
      </p>
      <h2>Finalité et base légale</h2>
      <p>
        Ces données servent uniquement à répondre à votre demande (préparation de votre maquette et échanges qui en découlent). Base légale :
        mesures précontractuelles prises à votre demande (art. 6.1.b RGPD).
      </p>
      <h2>Sous-traitant</h2>
      <p>
        Les messages du formulaire transitent par Web3Forms, qui les transmet par e-mail à FDC Webdesign. [À préciser : localisation des
        données et garanties de transfert.]
      </p>
      <h2>Durée de conservation</h2>
      <p>[À préciser : par exemple 12 mois après le dernier échange si aucune collaboration ne démarre.]</p>
      <h2>Mesure d’audience</h2>
      <p>
        Le site utilise Cloudflare Web Analytics, un outil de mesure sans cookie qui ne permet pas de vous identifier. Aucun cookie publicitaire
        ou de suivi n’est déposé.
      </p>
      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander l’accès, la rectification, l’effacement ou la limitation de vos données, ou vous opposer à leur traitement, en
        écrivant à {site.email}. Vous pouvez aussi introduire une réclamation auprès de l’Autorité de protection des données
        (autoriteprotectiondonnees.be).
      </p>
    </LegalPage>
  );
}

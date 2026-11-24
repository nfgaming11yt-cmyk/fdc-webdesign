import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site FDC Webdesign : éditeur, contact, numéro de TVA et hébergeur.",
  alternates: { canonical: "/mentions-legales/" },
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        FDC Webdesign, [forme juridique / nom de l’exploitant]
        <br />
        [Adresse complète], {site.locality}, Belgique
        <br />
        Numéro d’entreprise / TVA : {site.vat}
        <br />
        E-mail : {site.email} · Téléphone : {site.phone}
      </p>
      <h2>Hébergement</h2>
      <p>
        Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis. Le site est servi via le réseau Cloudflare Pages.
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, visuels et le code de ce site sont la propriété de FDC Webdesign, sauf mention contraire. Les projets présentés dans la
        page Réalisations sont des démonstrations : les entreprises citées sont fictives.
      </p>
      <h2>Responsabilité</h2>
      <p>[À préciser : clause de limitation de responsabilité quant au contenu du site et aux liens externes.]</p>
    </LegalPage>
  );
}

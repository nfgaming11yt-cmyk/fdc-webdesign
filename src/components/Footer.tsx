import Link from "next/link";
import { legalLinks, nav, site } from "@/content/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="on-ink relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true">
        <span className="ring-deco" style={{ width: 720, height: 720, right: -260, top: -220 }} />
        <span className="ring-deco" style={{ width: 480, height: 480, right: -140, top: -100 }} />
        <span className="ring-deco" style={{ width: 240, height: 240, right: -20, top: 20 }} />
      </div>
      <div className="container-x relative py-24 sm:py-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display reveal text-[clamp(44px,6.6vw,96px)]">
            <span className="block">Parlons de</span>
            <span className="block text-on-ink-dim">votre site.</span>
          </h2>
          <Link
            href="/contact/"
            className="inline-flex min-h-[52px] w-fit items-center rounded-full bg-volt px-7 text-[16px] font-medium text-ink transition-transform hover:-translate-y-0.5"
          >
            Recevoir ma maquette gratuite →
          </Link>
        </div>

        <div className="mt-20 grid gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo onInk />
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-on-ink">
              Sites web sur abonnement pour les indépendants et PME du {site.region} et de Bruxelles.
            </p>
          </div>
          <FooterCol title="Pages">
            <li>
              <Link href="/" className="hover:text-white">Accueil</Link>
            </li>
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </FooterCol>
          <FooterCol title="Contact">
            <li>{site.email}</li>
            <li>{site.phone}</li>
            <li>{site.locality}, {site.region}</li>
          </FooterCol>
          <FooterCol title="Légal">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-2 font-mono text-[12px] uppercase tracking-[0.08em] text-on-ink-dim sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} FDC Webdesign</p>
          <p>TVA {site.vat}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="label text-on-ink-dim">{title}</p>
      <ul className="mt-4 space-y-2.5 text-[15px] text-on-ink">{children}</ul>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/content/site";
import Logo from "./Logo";

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="relative z-20">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-5">
        <Link href="/" className="inline-flex min-h-11 items-center" aria-label="FDC Webdesign, accueil">
          <Logo />
        </Link>
        <nav aria-label="Navigation principale" className="order-3 w-full sm:order-none sm:w-auto">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 text-[15px] text-graphite">
            {nav.map((item) => {
              const active = pathname === item.href || pathname === item.href.slice(0, -1);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex min-h-11 items-center underline-offset-[6px] decoration-1 hover:text-ink ${
                      active ? "text-ink underline" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link
          href="/contact/"
          className="inline-flex min-h-11 items-center rounded-full bg-ink px-5 text-[14px] font-medium text-white transition-colors hover:bg-blue"
        >
          Maquette gratuite →
        </Link>
      </div>
    </header>
  );
}

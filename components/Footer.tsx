import Link from "next/link";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav, site, solutions } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white/70">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-leaf-500/10 blur-3xl" />

      <div className="container-x relative grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm leading-relaxed">
            Independent, science-based soil insights that help farmers grow healthier crops — without ever selling a single bag of fertilizer.
          </p>
          <p className="mt-6 font-display text-xl italic text-leaf-300">{site.tagline}</p>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">Company</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-leaf-300">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">Solutions</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/our-solutions/#${s.slug}`} className="transition hover:text-leaf-300">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">Get in touch</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 transition hover:text-leaf-300">
                <Mail className="mt-0.5 size-4 shrink-0 text-leaf-400" /> {site.email}
              </a>
            </li>
            <li>
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition hover:text-leaf-300">
                <MapPin className="mt-0.5 size-4 shrink-0 text-leaf-400" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                  <br />
                  {site.address.country}
                </span>
              </a>
            </li>
          </ul>
          <Link href="/contact/" className="btn-primary mt-7">
            Start a conversation <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Property of Grean. All Rights Reserved.</p>
          <p>
            Photography via{" "}
            <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="underline-offset-2 hover:underline">
              Pexels
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { nav } from "@/lib/site";

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    router.events.on("routeChangeStart", close);
    return () => router.events.off("routeChangeStart", close);
  }, [router.events]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;
  const isActive = (href: string) => router.asPath.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          solid ? "bg-forest-950/90 py-3 shadow-lg shadow-black/10 backdrop-blur-xl" : "py-5"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Logo light />

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-full px-4 py-2 text-[13px] font-medium transition ${
                      isActive(item.href) ? "bg-white text-forest-950" : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact/" className="btn-primary hidden !py-2.5 sm:inline-flex">
              Contact <ArrowUpRight className="size-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-full border border-white/20 text-white xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu – kept outside <header>: its backdrop-blur would otherwise become the containing block
          for this fixed panel and collapse it to the header's height */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 overflow-y-auto bg-forest-950 pt-[68px] transition-all duration-500 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="container-x flex flex-col py-8">
          {[...nav, { label: "Contact", href: "/contact/" }].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl transition-all duration-500 ${
                isActive(item.href) ? "text-leaf-300" : "text-white"
              } ${open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
            >
              {item.label}
              <ArrowUpRight className="size-5 opacity-50" />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}

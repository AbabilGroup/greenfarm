import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import { site, solutions } from "@/lib/site";

export default function OurSolutions() {
  return (
    <>
      <Seo
        title="Our Solutions — Soil Mapping, Foliar & Satellite Analysis"
        description="High-precision soil nutrient mapping, foliar assessment, soil structure mapping, aerial satellite analysis and a mobile platform — Grean's independent precision agriculture solutions."
        path="/our-solutions/"
        image="/images/aerial-tractor.jpg"
        breadcrumbs={[{ name: "Our Solutions", path: "/our-solutions/" }]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Grean solutions",
            itemListElement: solutions.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: {
                "@type": "Service",
                name: s.title,
                description: s.text,
                url: `${site.url}/our-solutions/#${s.slug}`,
                provider: { "@id": `${site.url}/#organization` },
              },
            })),
          },
        ]}
      />
      <PageHero
        eyebrow="Our Solutions"
        title="Precision insight for every hectare."
        intro="Far surpassing standard market offerings — clear, practical analysis that empowers you to understand your soil and its unique needs."
        image="/images/aerial-tractor.jpg"
        alt="Aerial view of a tractor working green farmland"
      />

      {/* Quick jump */}
      <nav aria-label="Solutions" className="sticky top-[68px] z-30 border-b border-forest-900/10 bg-cream-50/90 backdrop-blur-lg">
        <ul className="container-x flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {solutions.map((s) => (
            <li key={s.slug} className="shrink-0">
              <a href={`#${s.slug}`} className="flex items-center gap-2 rounded-full border border-forest-900/10 bg-white px-4 py-2 text-sm font-medium text-forest-900 transition hover:border-leaf-400 hover:bg-leaf-100">
                <Icon name={s.icon} className="size-4 text-forest-600" /> {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-x space-y-24 py-24 sm:space-y-32 sm:py-32">
        {solutions.map((s, i) => (
          <section key={s.slug} id={s.slug} className="grid scroll-mt-40 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] ${i % 2 ? "lg:order-2" : ""}`}>
              <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
            </Reveal>
            <Reveal delay={100}>
              <div className="flex items-center gap-4">
                <span className="grid size-14 place-items-center rounded-2xl bg-forest-900 text-leaf-300">
                  <Icon name={s.icon} className="size-7" />
                </span>
                <span className="font-display text-5xl text-forest-900/15">0{i + 1}</span>
              </div>
              <h2 className="mt-6 text-4xl font-medium leading-tight text-forest-900 sm:text-5xl">{s.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">{s.text}</p>
              <Link href="/contact/" className="group mt-8 inline-flex items-center gap-2 font-semibold text-forest-700">
                Ask about {s.title.toLowerCase()} <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </section>
        ))}
      </div>

      <CtaBanner title="Find the right solution for your land." />
    </>
  );
}

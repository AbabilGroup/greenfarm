import Image from "next/image";
import { Banknote, CloudSun, Grid3x3, Layers, Monitor, Satellite, ShieldCheck, Smartphone, Sprout, Users } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

const layers = [
  { icon: Grid3x3, title: "Grid samples", text: "Systematic grid sampling across every field." },
  { icon: Layers, title: "Soil properties", text: "Texture, structure and nutrient profiles." },
  { icon: Satellite, title: "Satellite imagery", text: "Regularly updated views of crop vigour." },
  { icon: CloudSun, title: "Weather patterns", text: "Local climate data layered on each field." },
];

const collaborators = [
  { icon: Sprout, title: "Agricultural inputs", text: "Suppliers of fertilizers, lime or crop protection can tailor what they offer to real needs." },
  { icon: Banknote, title: "Financing", text: "Lenders can see the latest field data to support better-informed decisions." },
  { icon: ShieldCheck, title: "Insurance", text: "Insurers gain accurate, up-to-date insight into the land they cover." },
];

export default function OurProduct() {
  return (
    <>
      <Seo
        title="Our Product — Agricultural GIS Platform"
        description="Grean's geographic information system combines grid soil samples, soil properties, satellite imagery and weather data into one mobile and desktop platform for farmers and their collaborators."
        path="/our-product/"
        image="/images/farmer-tablet.jpg"
        breadcrumbs={[{ name: "Our Product", path: "/our-product/" }]}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Grean Platform",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android",
            description: "A geographic information system for farmers combining grid soil samples, soil properties, satellite imagery and weather data.",
            publisher: { "@id": "https://www.greanfarm.eu/#organization" },
          },
        ]}
      />
      <PageHero
        eyebrow="Our Product"
        title="One platform. Every field. Always up to date."
        intro="A sophisticated geographical information system that is constantly evolving and expanding."
        image="/images/farmer-tablet.jpg"
        alt="Farmer standing in a field holding a tablet"
      />

      <section className="container-x grid gap-14 py-24 sm:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="How it works" title="The most accurate recommendations available." />
        </div>
        <Reveal className="prose-grean lg:col-span-7" delay={100}>
          <p>
            Grean has created a sophisticated geographical information system that is constantly evolving and expanding. By collecting grid samples and integrating additional data such as soil properties, satellite imagery, and weather patterns for each field, we provide our clients with the most accurate and up-to-date recommendations available.
          </p>
          <p>
            To ensure this information is easily accessible, we&apos;ve developed a digital platform that allows farmers and their collaborators to access critical data instantly via mobile or desktop.
          </p>
        </Reveal>
      </section>

      <section className="bg-forest-950 py-24 text-white sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading dark eyebrow="Data layers" title="Four sources. One clear picture." />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {layers.map(({ icon: I, title, text }, i) => (
                <Reveal key={title} delay={i * 80} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <I className="size-7 text-leaf-300" aria-hidden="true" />
                  <h3 className="mt-5 font-sans text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-white/60">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={150} className="relative aspect-square overflow-hidden rounded-[2rem]">
            <Image src="/images/farmland.jpg" alt="Drone view of agricultural field patterns" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute bottom-5 left-5 flex gap-2">
              <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-forest-900 backdrop-blur">
                <Smartphone className="size-4" aria-hidden="true" /> Mobile
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-forest-900 backdrop-blur">
                <Monitor className="size-4" aria-hidden="true" /> Desktop
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          align="center"
          eyebrow="Collaboration"
          title="Invite the people who help you farm."
          intro="With the farmer's consent, external collaborators and service providers can access the latest data — so they can tailor their products and services to meet specific needs."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {collaborators.map(({ icon: I, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="card p-8">
              <span className="grid size-12 place-items-center rounded-2xl bg-leaf-100 text-forest-700">
                <I className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-sans text-lg font-semibold text-forest-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mx-auto mt-14 flex max-w-3xl items-start gap-4 rounded-3xl bg-leaf-100 p-7">
          <Users className="mt-1 size-6 shrink-0 text-forest-700" aria-hidden="true" />
          <p className="leading-relaxed text-forest-900">
            This state-of-the-art system ensures farmers have a centralized platform that seamlessly connects them to a curated network of products and services, all designed to align perfectly with their individual requirements.
          </p>
        </Reveal>
      </section>

      <CtaBanner title="See your fields like never before." />
    </>
  );
}

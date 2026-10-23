import Image from "next/image";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import { principles, values } from "@/lib/site";

export default function OurPrinciples() {
  return (
    <>
      <Seo
        title="Our Principles & Values"
        description="Grean's principles: we don't sell inputs, we stay independent, we add nothing unnecessary to the soil, we make no assumptions and we never work in isolation."
        path="/our-principles/"
        image="/images/planting.jpg"
        breadcrumbs={[{ name: "Our Principles", path: "/our-principles/" }]}
      />
      <PageHero
        eyebrow="Our Principles"
        title="Five promises we never break."
        intro="Integrity, collaboration, expertise and transparency — put into practice on every farm we work with."
        image="/images/planting.jpg"
        alt="Hands planting a young seedling in soil"
      />

      <section className="container-x py-24 sm:py-32">
        <ol className="divide-y divide-forest-900/10 border-y border-forest-900/10">
          {principles.map((p, i) => (
            <Reveal as="li" key={p.title} className="grid items-start gap-6 py-10 md:grid-cols-12 md:gap-10">
              <span className="font-display text-6xl text-leaf-400 md:col-span-2">0{i + 1}</span>
              <div className="flex items-center gap-4 md:col-span-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-leaf-100 text-forest-700">
                  <Icon name={p.icon} className="size-6" />
                </span>
                <h2 className="text-3xl font-medium text-forest-900">{p.title}</h2>
              </div>
              <p className="text-lg leading-relaxed text-ink/70 md:col-span-6">{p.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <Image src="/images/wheat-forest.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-forest-950/85" />
        <div className="container-x">
          <SectionHeading dark align="center" eyebrow="Our values" title="The values behind the principles." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur-md">
                <Icon name={v.icon} className="mx-auto size-8 text-leaf-300" />
                <h3 className="mt-5 text-2xl font-medium text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

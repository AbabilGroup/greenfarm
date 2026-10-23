import Image from "next/image";
import { Code2, Gauge, HeartHandshake, Wrench } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

const strengths = [
  { icon: Code2, title: "11+ years of development", text: "A wealth of experience shaping software solutions for agriculture." },
  { icon: Gauge, title: "Quick to adapt", text: "A dedicated in-house team lets us respond fast to changing needs." },
  { icon: Wrench, title: "Customized solutions", text: "Tools designed around the unique needs of each farmer." },
  { icon: HeartHandshake, title: "Commitment to people", text: "A passion for quality craftsmanship and the people who use it." },
];

export default function TheWorkshop() {
  return (
    <>
      <Seo
        title="The Workshop — Our In-House Software Studio"
        description="Grean's in-house Studio brings more than 11 years of development expertise, designing customized agricultural software that adapts quickly to the unique needs of farmers."
        path="/the-workshop/"
        image="/images/drone-control.jpg"
        breadcrumbs={[{ name: "The Workshop", path: "/the-workshop/" }]}
      />
      <PageHero
        eyebrow="The Workshop"
        title="Where farming knowledge meets software craft."
        intro="Our wealth of experience and forward-thinking approach distinguish us in the industry."
        image="/images/drone-control.jpg"
        alt="Farmers using drone controllers on a farm for precision agriculture"
      />

      <section className="container-x grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Our Studio" title="Built in-house, built for farmers." />
          <Reveal className="prose-grean mt-6" delay={100}>
            <p>
              At Grean, our wealth of experience and forward-thinking approach distinguish us in the industry. With more than 11 years of expertise in development, our Studio plays a pivotal role in shaping our software solutions.
            </p>
            <p>
              By having a dedicated in-house team, we can quickly adapt and design customized solutions that address the unique needs of farmers. Our Studio thrives on a passion for quality craftsmanship and a strong commitment to people.
            </p>
          </Reveal>
        </div>
        <Reveal delay={100} className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl">
            <Image src="/images/greenhouse-tablet.jpg" alt="Grower using a tablet for plant management in a greenhouse" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <Image src="/images/tablet-plants.jpg" alt="Farmer browsing a tablet beside green plants" fill sizes="25vw" className="object-cover" />
          </div>
          <div className="flex aspect-square flex-col justify-end rounded-3xl bg-forest-900 p-6 text-white">
            <p className="font-display text-6xl text-leaf-300">11+</p>
            <p className="mt-1 text-sm text-white/70">years of software expertise</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-cream-100 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="Why it matters" title="Craftsmanship you can feel in the field." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ icon: I, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className="card p-7">
                <span className="grid size-12 place-items-center rounded-2xl bg-leaf-100 text-forest-700">
                  <I className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-sans text-lg font-semibold text-forest-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner title="Have a challenge our Studio could solve?" />
    </>
  );
}

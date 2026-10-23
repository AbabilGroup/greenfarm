import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import { site, stats, values } from "@/lib/site";

export default function AboutUs() {
  return (
    <>
      <Seo
        title="About Us — Independent Agricultural Partner"
        description="Grean is an independent agricultural partner based in Croatia. We don't sell fertilizers, lime or chemicals — our advice is rooted in precise, scientifically gathered soil data."
        path="/about-us/"
        image="/images/france-fields.jpg"
        breadcrumbs={[{ name: "About Us", path: "/about-us/" }]}
      />
      <PageHero
        eyebrow="About Us"
        title="Completely independent. Entirely on the farmer's side."
        intro="We don't sell fertilizers, lime, or chemicals. It's not part of our business model, and it never will be."
        image="/images/france-fields.jpg"
        alt="Green fields stretching under a blue sky"
      />

      <section className="container-x grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Who we are" title="A true partner in agriculture." />
          <Reveal className="prose-grean mt-6" delay={100}>
            <p>
              We&apos;re not answerable to any external entity that doesn&apos;t prioritize the farmer&apos;s best interests. As a true partner in agriculture, Grean remains completely independent.
            </p>
            <p>
              We don&apos;t make assumptions. All our advice is rooted in precise, scientifically gathered data, carefully analyzed to determine the best course of action for each unique situation.
            </p>
            <p>
              We never work in isolation. The farmer is at the heart of everything we do, and their active involvement in the process is vital to our mutual success. This partnership is one of the main reasons we are passionate about what we do.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link href="/our-principles/" className="group mt-8 inline-flex items-center gap-2 font-semibold text-forest-700">
              Read our principles <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={100} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image src="/images/farmer-sunrise.jpg" alt="Farmer working in a field at sunrise" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-3xl bg-forest-900 p-6 text-white shadow-2xl sm:-left-8">
            <p className="font-display text-5xl text-leaf-300">{site.founded}</p>
            <p className="mt-1 text-sm text-white/70">Supporting farmers since</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-forest-950 py-16">
        <dl className="container-x grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="flex flex-col-reverse">
              <dt className="mt-2 text-sm text-white/60">{s.label}</dt>
              <dd className="font-display text-5xl text-leaf-300">{s.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="container-x py-24 sm:py-32">
        <SectionHeading align="center" eyebrow="Our values" title="What we stand for." />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="card group p-8 transition hover:-translate-y-1 hover:bg-forest-900">
              <Icon name={v.icon} className="size-8 text-forest-600 transition group-hover:text-leaf-300" />
              <h3 className="mt-8 text-3xl font-medium text-forest-900 transition group-hover:text-white">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65 transition group-hover:text-white/70">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}

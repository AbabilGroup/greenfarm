import Image from "next/image";
import { FlaskConical, Smartphone, Sprout, TrendingDown } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

const pillars = [
  { icon: FlaskConical, title: "Rooted in science", text: "Agriculture is rooted in science, and we apply that knowledge to enhance and align with your unique farming practices." },
  { icon: Sprout, title: "Healthy soil, not chemicals", text: "Plants don't need synthetic chemicals to thrive; they require healthy, fertile soil." },
  { icon: TrendingDown, title: "Less uncertainty, less risk", text: "Thorough soil testing and data collection remove uncertainty from natural growth, maximizing fertility while reducing risk." },
  { icon: Smartphone, title: "Support every step", text: "We work closely with farmers and support them every step of the way through our user-friendly mobile platform." },
];

export default function WhyGrean() {
  return (
    <>
      <Seo
        title="Why Grean — Science-Based Soil Health"
        description="Why farmers choose Grean: independent, science-based soil testing and data that maximize soil fertility and reduce farming risk — without synthetic-chemical sales pressure."
        path="/why-grean/"
        image="/images/sprout.jpg"
        breadcrumbs={[{ name: "Why Grean", path: "/why-grean/" }]}
      />
      <PageHero
        eyebrow="Why Grean"
        title="We focus on the fundamentals: the soil."
        intro="Too often, the industry leads us to believe that packaged solutions are the answer to every agricultural challenge. We believe in something simpler."
        image="/images/sprout.jpg"
        alt="A young green sprout growing from rich dark soil"
      />

      <section className="container-x grid gap-14 py-24 sm:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="Our belief" title="Grean is dedicated to supporting farmers." />
        </div>
        <Reveal className="prose-grean lg:col-span-7" delay={100}>
          <p>
            At Grean, we believe that agriculture is rooted in science, and we apply that knowledge to enhance and align with your unique farming practices. Too often, the industry leads us to believe that packaged solutions are the answer to every agricultural challenge. However, we focus on the fundamentals: improving the health of the soil.
          </p>
          <p>
            We deeply understand agricultural science, and when we talk about science, we mean the soil. Plants don&apos;t need synthetic chemicals to thrive; they require healthy, fertile soil. Through a thorough process of soil testing and data collection, Grean removes uncertainty from natural growth. We maximize soil fertility while reducing farming risks.
          </p>
          <p>
            Working closely with farmers, we support them every step of the way through our user-friendly mobile platform.
          </p>
        </Reveal>
      </section>

      <section className="bg-cream-100 py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="What sets us apart" title="Four reasons farmers trust Grean." />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: I, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className="card p-7 transition hover:-translate-y-1">
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

      <section className="container-x py-24 sm:py-32">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem]">
          <div className="relative aspect-[16/9] min-h-[380px] w-full">
            <Image src="/images/planting.jpg" alt="Hands gently planting a seedling in fresh soil" fill sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent" />
          <blockquote className="absolute inset-x-0 bottom-0 p-8 sm:p-14">
            <p className="max-w-3xl font-display text-3xl leading-snug text-white sm:text-4xl">
              &ldquo;In essence, Grean ensures that the soil in which you plant, nurture, and harvest is sustainable, natural, and healthy — leading to better crops and a brighter future.&rdquo;
            </p>
          </blockquote>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}

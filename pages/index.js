import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CloudSun, Grid3x3, Layers, Satellite, ShieldCheck } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import Icon from "@/components/Icon";
import { principles, site, solutions, stats, timeline } from "@/lib/site";

const keywords = ["Soil health", "Science-based advice", "Precision mapping", "Foliar analysis", "Satellite imagery", "Independent", "Sustainable farming", "Data you can trust"];

const dataLayers = [
  { icon: Grid3x3, label: "Grid soil samples" },
  { icon: Layers, label: "Soil properties" },
  { icon: Satellite, label: "Satellite imagery" },
  { icon: CloudSun, label: "Weather patterns" },
];

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: site.name,
            url: site.url,
            description: site.description,
            publisher: { "@id": `${site.url}/#organization` },
          },
        ]}
      />

      {/* HERO */}
      <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-forest-950">
        <Image src="/images/hero.jpg" alt="Aerial view of a patchwork of green and golden farm fields" fill priority sizes="100vw" className="-z-20 scale-105 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/70 via-forest-950/30 to-forest-950" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950/80 to-transparent" />

        <div className="container-x pb-10 pt-36 sm:pt-44">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  <span className="size-1.5 animate-pulse rounded-full bg-leaf-300" /> Independent soil science since 2014
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-6 text-5xl font-medium leading-[0.98] text-white sm:text-7xl lg:text-[5.5rem]">
                  Towards a <em className="text-leaf-300">sustainable</em> future, rooted in healthy soil.
                </h1>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
                  Grean gives farmers impartial, science-based guidance for sustainable farming and reduced risk — with no pressure to buy products.
                </p>
              </Reveal>
              <Reveal delay={300} className="mt-9 flex flex-wrap gap-3">
                <Link href="/our-solutions/" className="btn-primary">
                  Explore our solutions <ArrowRight className="size-4" />
                </Link>
                <Link href="/why-grean/" className="btn-ghost">
                  Why Grean?
                </Link>
              </Reveal>
            </div>

            <Reveal delay={400} className="hidden lg:col-span-4 lg:block">
              <div className="animate-float rounded-3xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur-xl">
                <ShieldCheck className="size-8 text-leaf-300" aria-hidden="true" />
                <p className="mt-4 font-display text-2xl leading-snug">We don&apos;t sell fertilizers, lime, or chemicals.</p>
                <p className="mt-2 text-sm text-white/70">It&apos;s not part of our business model, and it never will be.</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={500}>
            <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-forest-950/40 px-6 py-5">
                  <dt className="text-xs uppercase tracking-wider text-white/60">{s.label}</dt>
                  <dd className="mt-1 font-display text-3xl text-white sm:text-4xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b border-forest-900/10 bg-leaf-300 py-4" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-xl text-forest-950">
          {[...keywords, ...keywords].map((k, i) => (
            <span key={i} className="flex items-center gap-10">
              {k} <span className="text-forest-700">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* WHY GREAN */}
      <section className="container-x grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image src="/images/soil.jpg" alt="Close-up of rich, dark brown agricultural soil" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 w-1/2 overflow-hidden rounded-3xl border-8 border-cream-50 sm:-right-8">
            <div className="relative aspect-square">
              <Image src="/images/sprout.jpg" alt="A young green sprout emerging from fertile soil" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
          <div className="absolute left-5 top-5 rounded-2xl bg-white/90 px-5 py-4 shadow-xl backdrop-blur">
            <p className="font-display text-3xl text-forest-900">Soil first.</p>
            <p className="text-xs text-ink/60">Not packaged solutions.</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="Why Grean" title="When we talk about science, we mean the soil." />
          <Reveal className="prose-grean mt-6" delay={100}>
            <p>
              Too often, the industry leads us to believe that packaged solutions are the answer to every agricultural challenge. We focus on the fundamentals: improving the health of the soil.
            </p>
            <p>
              Plants don&apos;t need synthetic chemicals to thrive; they require healthy, fertile soil. Through thorough soil testing and data collection, Grean removes uncertainty from natural growth — maximizing fertility while reducing farming risk.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Link href="/why-grean/" className="group mt-8 inline-flex items-center gap-2 font-semibold text-forest-700">
              Discover our approach <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS BENTO */}
      <section className="bg-cream-100 py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Our solutions" title="Far beyond standard market offerings." />
            <Reveal>
              <Link href="/our-solutions/" className="btn-dark">
                All solutions <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid auto-rows-[300px] gap-5 md:grid-cols-6">
            {solutions.map((s, i) => (
              <Reveal
                key={s.slug}
                delay={i * 80}
                className={i === 0 ? "md:col-span-4 md:row-span-2" : i < 3 ? "md:col-span-2" : "md:col-span-3"}
              >
                <Link href={`/our-solutions/#${s.slug}`} className="group relative block h-full overflow-hidden rounded-3xl bg-forest-900">
                  <Image src={s.image} alt={s.alt} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-60" />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
                    <span className="grid size-11 place-items-center rounded-full bg-white/15 text-leaf-300 backdrop-blur-md">
                      <Icon name={s.icon} className="size-5" />
                    </span>
                    <div>
                      <h3 className={`font-medium text-white ${i === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>{s.title}</h3>
                      <p className="mt-2 max-w-md text-sm text-white/75">{s.short}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="absolute right-6 top-6 size-6 text-white opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="relative overflow-hidden bg-forest-950 py-24 text-white sm:py-32">
        <div aria-hidden="true" className="absolute -left-40 top-20 size-[500px] rounded-full bg-leaf-500/15 blur-3xl" />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              dark
              eyebrow="Our product"
              title="A living map of every field you farm."
              intro="A sophisticated geographic information system that is constantly evolving — combining grid samples with soil properties, satellite imagery and weather data for the most accurate, up-to-date recommendations."
            />
            <Reveal delay={100}>
              <ul className="mt-10 grid grid-cols-2 gap-3">
                {dataLayers.map(({ icon: I, label }) => (
                  <li key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm">
                    <I className="size-5 shrink-0 text-leaf-300" aria-hidden="true" /> {label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <Link href="/our-product/" className="btn-primary mt-10">
                See the platform <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={150} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-white/10">
              <Image src="/images/farmer-tablet.jpg" alt="Farmer standing in a field holding a tablet with field data" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl bg-white p-4 text-ink shadow-2xl sm:left-auto sm:w-80">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-leaf-100 text-forest-700">
                <Icon name="Smartphone" className="size-6" />
              </span>
              <p className="text-sm leading-snug">
                <strong className="block text-forest-900">Mobile &amp; desktop</strong>
                Invite advisors, suppliers or insurers — with your consent.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading align="center" eyebrow="Our journey" title="From spreadsheets to a smart farming platform." />
        <div className="relative mt-16">
        <div aria-hidden="true" className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-transparent via-leaf-400 to-transparent md:block" />
        <ol className="grid gap-6 md:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal as="li" key={t.year} delay={i * 100} className="relative">
              <span className="relative z-10 grid size-11 place-items-center rounded-full bg-forest-900 text-xs font-bold text-leaf-300 ring-8 ring-cream-50">{i + 1}</span>
              <p className="mt-6 font-display text-4xl text-forest-900">{t.year}</p>
              <h3 className="mt-2 font-sans text-base font-semibold text-ink">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{t.text}</p>
            </Reveal>
          ))}
        </ol>
        </div>
        <Reveal className="mt-12 text-center">
          <Link href="/our-journey/" className="group inline-flex items-center gap-2 font-semibold text-forest-700">
            Read our full story <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* PRINCIPLES */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <Image src="/images/france-fields.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-forest-950/85" />
        <div className="container-x">
          <SectionHeading dark eyebrow="Our principles" title="A true partner in agriculture." intro="Five commitments that guide every recommendation we make." />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10">
                <Icon name={p.icon} className="size-7 text-leaf-300" />
                <h3 className="mt-6 font-sans text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP */}
      <section className="container-x grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2">
        <div className="lg:order-2">
          <SectionHeading
            eyebrow="The workshop"
            title="An in-house studio built for farmers."
            intro="With more than 11 years of development expertise, our Studio designs customized software that adapts quickly to the unique needs of farmers — driven by quality craftsmanship and a strong commitment to people."
          />
          <Reveal delay={100}>
            <Link href="/the-workshop/" className="btn-dark mt-8">
              Visit the workshop <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
        <Reveal className="grid grid-cols-2 gap-4 lg:order-1">
          <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl">
            <Image src="/images/drone-control.jpg" alt="Farmers using drone controllers for precision agriculture" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
            <Image src="/images/greenhouse-tablet.jpg" alt="Grower managing plants with a tablet in a greenhouse" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
          </div>
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}

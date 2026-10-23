import Image from "next/image";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import { timeline } from "@/lib/site";

const chapters = [
  {
    label: "Our history",
    title: "Built on rapid growth.",
    image: "/images/tractor.jpg",
    alt: "A green tractor working a ploughed field",
    paragraphs: [
      "Grean was founded in 2014, and from the outset, the business experienced rapid growth. Initially, we managed data processing through intricate digital spreadsheets, but as our operations expanded, it became evident that our existing systems were no longer sufficient. To continue meeting the needs of our growing customer base, we recognized the necessity of developing a tailored software solution.",
      "In early 2018, Grean teamed up with Solution Server to create a custom application designed specifically for our business. The success of this partnership led to Solution Server merging with Grean in June 2020, which significantly enhanced our technological capabilities.",
    ],
  },
  {
    label: "Our current position",
    title: "At the forefront — locally and globally.",
    image: "/images/farmer-sunrise.jpg",
    alt: "Farmer working in a verdant field at sunrise",
    paragraphs: [
      "Currently, we are fortunate to have an in-house team of software developers who not only cater to our ongoing needs but also focus on pioneering cutting-edge technological solutions for our clients.",
      "Grean stands at the forefront of our industry, both locally and globally, thanks to our specialized knowledge and expertise. We've cultivated a broad network of agricultural experts and are steadfast advocates for farmers, while simultaneously growing our own impact and footprint within the industry.",
    ],
  },
  {
    label: "Our upcoming journey",
    title: "Complex data, made simple.",
    image: "/images/wheat-forest.jpg",
    alt: "Expansive wheat field with a dense forest in the background",
    paragraphs: [
      "Regardless of what the future holds, we are dedicated to the principles and vision that have propelled Grean to the forefront of the industry.",
      "We will stay focused on advancing research, encouraging new ideas, and simplifying complex data into valuable, easy-to-understand insights for the people who rely on it most — our farmers.",
    ],
  },
];

export default function OurJourney() {
  return (
    <>
      <Seo
        title="Our Journey — From 2014 to Today"
        description="The Grean story: founded in 2014, partnered with Solution Server in 2018 and merged in 2020 — building an in-house team that turns complex soil data into simple insights for farmers."
        path="/our-journey/"
        image="/images/farmer-sunrise.jpg"
        breadcrumbs={[{ name: "Our Journey", path: "/our-journey/" }]}
      />
      <PageHero
        eyebrow="Our Journey"
        title="From spreadsheets to a smart farming platform."
        intro="A decade of growth, partnership and innovation — always with the farmer at the centre."
        image="/images/farmer-sunrise.jpg"
        alt="Farmer working in a green field at sunrise"
      />

      {/* Timeline */}
      <section className="bg-forest-950 py-20 text-white">
        <div className="container-x">
          <ol className="grid gap-px overflow-hidden rounded-3xl bg-white/10 md:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal as="li" key={t.year} delay={i * 100} className="bg-forest-950 p-8">
                <p className="font-display text-5xl text-leaf-300">{t.year}</p>
                <h2 className="mt-4 font-sans text-base font-semibold">{t.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{t.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {chapters.map((c, i) => (
        <section key={c.label} className={i % 2 ? "bg-cream-100" : ""}>
          <div className="container-x grid items-center gap-14 py-24 sm:py-28 lg:grid-cols-2">
            <Reveal className={`relative aspect-[4/3] overflow-hidden rounded-[2rem] ${i % 2 ? "lg:order-2" : ""}`}>
              <Image src={c.image} alt={c.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1.5 font-display text-sm text-forest-900 backdrop-blur">
                Chapter {i + 1}
              </span>
            </Reveal>
            <div>
              <SectionHeading eyebrow={c.label} title={c.title} />
              <Reveal className="prose-grean mt-6" delay={100}>
                {c.paragraphs.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <CtaBanner title="Be part of the next chapter." />
    </>
  );
}

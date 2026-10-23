import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Banner used at the top of every inner page
export default function PageHero({ eyebrow, title, intro, image, alt }) {
  return (
    <section className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-forest-950 pb-16 pt-40 sm:pb-20">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="-z-20 object-cover opacity-70" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/30" />

      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-white/60">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span className="text-white" aria-current="page">{eyebrow}</span>
        </nav>
        <h1 className="max-w-4xl text-5xl font-medium leading-[1.02] text-white sm:text-6xl lg:text-7xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">{intro}</p>}
      </div>
    </section>
  );
}

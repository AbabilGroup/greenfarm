import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function CtaBanner({
  title = "Let's understand your soil — together.",
  text = "Tell us about your land and your goals. We'll show you what the data says, with no product to sell and no strings attached.",
}) {
  return (
    <section className="container-x pb-20 sm:pb-28">
      <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-forest-900 px-6 py-16 sm:px-14 sm:py-20">
        <Image src="/images/aerial-wheat.jpg" alt="" fill sizes="(min-width: 1280px) 1216px, 100vw" className="-z-20 object-cover opacity-70" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950 via-forest-950/75 to-transparent" />
        <div className="max-w-2xl">
          <h2 className="text-4xl font-medium leading-tight text-white sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">{text}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact/" className="btn-primary">
              Get in touch <ArrowUpRight className="size-4" />
            </Link>
            <a href={`mailto:${site.email}`} className="btn-ghost">
              <Mail className="size-4" /> {site.email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

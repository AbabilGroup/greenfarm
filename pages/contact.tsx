import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us"
        description={`Get in touch with Grean for independent soil analysis and precision agriculture advice. Email ${site.email} or visit us in ${site.address.city}, ${site.address.country}.`}
        path="/contact/"
        image="/images/wheat-forest.jpg"
        breadcrumbs={[{ name: "Contact", path: "/contact/" }]}
      />

      <section className="relative isolate overflow-hidden bg-forest-950 pb-24 pt-40 sm:pb-32">
        <Image src="/images/wheat-forest.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-30" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/60 to-forest-950" />

        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow">Get in touch</p>
              <h1 className="mt-5 text-5xl font-medium leading-[1.02] text-white sm:text-6xl lg:text-7xl">Let&apos;s talk about your soil.</h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
                Questions about our solutions, the platform, or working together? Send us a message and our team will get back to you.
              </p>
            </Reveal>

            <Reveal delay={100} className="mt-12 space-y-4">
              <a href={`mailto:${site.email}`} className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-leaf-400 text-forest-950">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-wider text-white/50">General enquiries</span>
                  <span className="text-lg text-white">{site.email}</span>
                </span>
                <ArrowUpRight className="ml-auto size-5 text-white/40 transition group-hover:text-white" aria-hidden="true" />
              </a>
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-leaf-400 text-forest-950">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <address className="not-italic">
                  <span className="block text-xs uppercase tracking-wider text-white/50">Physical address</span>
                  <span className="text-white">
                    {site.address.street}, {site.address.postalCode} {site.address.city}, {site.address.country}
                  </span>
                </address>
                <ArrowUpRight className="ml-auto size-5 shrink-0 text-white/40 transition group-hover:text-white" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="rounded-[2rem] bg-cream-50 p-7 shadow-2xl sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal className="overflow-hidden rounded-[2rem] ring-1 ring-forest-900/10">
          <iframe
            title={`Map showing Grean at ${site.address.city}, ${site.address.country}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.address.street}, ${site.address.postalCode} ${site.address.city}, ${site.address.country}`)}&output=embed`}
            className="h-[420px] w-full grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}

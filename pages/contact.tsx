import { useState, type FormEvent } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Loader2, Mail, MapPin } from "lucide-react";
import Seo from "@/components/Seo";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const field =
  "w-full rounded-2xl border border-forest-900/10 bg-white px-5 py-4 text-ink placeholder:text-ink/40 transition focus:border-leaf-400 focus:outline-none focus:ring-4 focus:ring-leaf-400/20";

type Status = "idle" | "sending" | "sent" | "error";

interface ContactResponse {
  ok?: boolean;
  error?: string;
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      // contact.php lives in public/ and is served by Hostinger's PHP
      const res = await fetch("/contact.php", { method: "POST", body: new FormData(form) });
      const data: ContactResponse = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description={`Get in touch with Grean for independent soil analysis and precision agriculture advice. Email ${site.email} or visit us in ${site.address.city}, France.`}
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
              {status === "sent" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center" role="status">
                  <CheckCircle2 className="size-14 text-leaf-500" aria-hidden="true" />
                  <h2 className="mt-5 text-3xl font-medium text-forest-900">Thank you!</h2>
                  <p className="mt-2 max-w-sm text-ink/65">Your message has been sent. We&apos;ll be in touch soon.</p>
                  <button type="button" onClick={() => setStatus("idle")} className="btn-dark mt-8">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4" noValidate={false}>
                  <h2 className="text-3xl font-medium text-forest-900">Send us a message</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="sr-only">Your name</span>
                      <input name="name" required maxLength={100} autoComplete="name" placeholder="Your name" className={field} />
                    </label>
                    <label className="block">
                      <span className="sr-only">Email address</span>
                      <input name="email" type="email" required maxLength={150} autoComplete="email" placeholder="Email address" className={field} />
                    </label>
                  </div>
                  <label className="block">
                    <span className="sr-only">Farm or company</span>
                    <input name="company" maxLength={150} autoComplete="organization" placeholder="Farm / company (optional)" className={field} />
                  </label>
                  <label className="block">
                    <span className="sr-only">Message</span>
                    <textarea name="message" required rows={6} maxLength={5000} placeholder="How can we help?" className={`${field} resize-none`} />
                  </label>
                  {/* Honeypot: bots fill it, humans never see it */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                  {status === "error" && (
                    <p className="rounded-2xl bg-red-50 px-5 py-3 text-sm text-red-700" role="alert">
                      Sorry, something went wrong. Please email us directly at{" "}
                      <a href={`mailto:${site.email}`} className="font-semibold underline">
                        {site.email}
                      </a>
                      .
                    </p>
                  )}

                  <button type="submit" disabled={status === "sending"} className="btn-primary w-full !py-4 disabled:opacity-60">
                    {status === "sending" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" aria-hidden="true" /> Sending…
                      </>
                    ) : (
                      <>
                        Submit <ArrowUpRight className="size-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-20">
        <Reveal className="overflow-hidden rounded-[2rem] ring-1 ring-forest-900/10">
          <iframe
            title={`Map showing Grean at ${site.address.city}, France`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${site.address.street}, ${site.address.postalCode} ${site.address.city}, France`)}&output=embed`}
            className="h-[420px] w-full grayscale-[30%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </section>
    </>
  );
}

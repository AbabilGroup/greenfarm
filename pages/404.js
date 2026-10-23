import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" path="/404/" noindex />
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-forest-950">
        <Image src="/images/aerial-wheat.jpg" alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-25" />
        <div className="container-x text-center">
          <p className="font-display text-[8rem] leading-none text-leaf-300 sm:text-[12rem]">404</p>
          <h1 className="mt-4 text-4xl font-medium text-white sm:text-5xl">This field is still fallow.</h1>
          <p className="mx-auto mt-4 max-w-md text-white/70">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/" className="btn-primary mt-10">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
        </div>
      </section>
    </>
  );
}

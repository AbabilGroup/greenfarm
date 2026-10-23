import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Grean — home">
      <img src="/images/logo-sm.png" alt="" width={30} height={39} className="h-9 w-auto transition-transform duration-500 group-hover:rotate-[-8deg]" />
      <span className={`font-display text-2xl font-semibold tracking-tight ${light ? "text-white" : "text-forest-900"}`}>Grean</span>
    </Link>
  );
}

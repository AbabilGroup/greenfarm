import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, intro, align = "left", dark = false, className = "" }: SectionHeadingProps) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && <p className={`eyebrow ${center ? "justify-center" : ""}`}>{eyebrow}</p>}
      <h2 className={`mt-4 text-4xl font-medium leading-[1.08] sm:text-5xl ${dark ? "text-white" : "text-forest-900"}`}>{title}</h2>
      {intro && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/70" : "text-ink/70"}`}>{intro}</p>}
    </Reveal>
  );
}

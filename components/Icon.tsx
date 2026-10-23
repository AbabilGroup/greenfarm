import {
  Ban,
  Eye,
  FlaskConical,
  GraduationCap,
  Handshake,
  Layers,
  Leaf,
  Map,
  Satellite,
  Scale,
  ShieldCheck,
  Smartphone,
  Sprout,
  Users,
  type LucideProps,
} from "lucide-react";

const icons = { Ban, Eye, FlaskConical, GraduationCap, Handshake, Layers, Leaf, Map, Satellite, Scale, ShieldCheck, Smartphone, Sprout, Users };

export type IconName = keyof typeof icons;

interface IconProps extends LucideProps {
  name: IconName;
}

// Resolves icon names stored in lib/site.ts to lucide components
export default function Icon({ name, ...props }: IconProps) {
  const Cmp = icons[name] ?? Leaf;
  return <Cmp aria-hidden="true" strokeWidth={1.75} {...props} />;
}

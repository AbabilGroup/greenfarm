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
} from "lucide-react";

const icons = { Ban, Eye, FlaskConical, GraduationCap, Handshake, Layers, Leaf, Map, Satellite, Scale, ShieldCheck, Smartphone, Sprout, Users };

// Resolves icon names stored in lib/site.js to lucide components
export default function Icon({ name, ...props }) {
  const Cmp = icons[name] ?? Leaf;
  return <Cmp aria-hidden="true" strokeWidth={1.75} {...props} />;
}

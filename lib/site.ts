import type { IconName } from "@/components/Icon";

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Solution {
  slug: string;
  title: string;
  short: string;
  text: string;
  image: string;
  alt: string;
  icon: IconName;
}

export interface TimelineEntry {
  year: string;
  title: string;
  text: string;
}

export interface IconCard {
  title: string;
  text: string;
  icon: IconName;
}

export const site = {
  name: "Grean",
  legalName: "Grean",
  url: "https://www.greanfarm.eu",
  tagline: "Towards a Sustainable Future",
  description:
    "Grean gives farmers independent, science-based soil analysis and precision agriculture insights — soil nutrient mapping, foliar assessment, satellite analysis and a mobile platform. We never sell fertilizers or chemicals.",
  email: "info@greanfarm.eu",
  address: {
    street: "1 Côte de la Forge",
    postalCode: "23100",
    city: "Saint-Oradoux-de-Chirouze",
    country: "France",
    countryCode: "FR",
  },
  mapUrl: "https://maps.app.goo.gl/K6e1immii9tGULjB7",
  ogImage: "/images/og-image.jpg",
  founded: "2014",
  locale: "en_GB",
} as const;

export const nav: NavItem[] = [
  { label: "Why Grean", href: "/why-grean/" },
  { label: "Our Journey", href: "/our-journey/" },
  { label: "Our Product", href: "/our-product/" },
  { label: "Solutions", href: "/our-solutions/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Principles", href: "/our-principles/" },
  { label: "Workshop", href: "/the-workshop/" },
];

export const stats: Stat[] = [
  { value: "2014", label: "Founded" },
  { value: "11+", label: "Years building software" },
  { value: "0", label: "Chemicals sold — ever" },
  { value: "100%", label: "Independent advice" },
];

export const solutions: Solution[] = [
  {
    slug: "soil-nutrient-mapping",
    title: "High-Precision Soil Nutrient Mapping",
    short: "Detailed land analysis with clear prescription charts.",
    text: "Far surpassing standard market offerings, we provide farmers with a detailed and insightful analysis of their land. Accompanied by a comprehensive set of prescription charts, our reports are crafted to be straightforward and easy to interpret, empowering farmers with a clear understanding of their soil and its unique needs.",
    image: "/images/tilled-soil.jpg",
    alt: "Freshly tilled, nutrient-rich farm soil ready for planting",
    icon: "Layers",
  },
  {
    slug: "foliar-assessment",
    title: "Foliar Assessment",
    short: "Leaf analysis to keep plant nutrients in balance.",
    text: "A detailed interpretation of leaf analysis empowers farmers to effectively oversee and regulate the nutrient balance of their plants, ensuring optimal growth and health.",
    image: "/images/leaf.jpg",
    alt: "Close-up of a green leaf showing its vein structure",
    icon: "Leaf",
  },
  {
    slug: "soil-structure-mapping",
    title: "Soil Structure Mapping",
    short: "High-resolution charts for planting and drainage.",
    text: "We provide precise, high-resolution soil mapping charts that are essential for evaluating plant potential, optimizing planting strategies, and designing efficient drainage systems.",
    image: "/images/aerial-tractor.jpg",
    alt: "Aerial view of a tractor creating patterns across green farmland",
    icon: "Map",
  },
  {
    slug: "aerial-satellite-analysis",
    title: "Aerial Satellite Analysis",
    short: "Regularly updated imagery for continuous planning.",
    text: "We regularly update the satellite imagery, ensuring that the most current data is available to assist with continuous planning and production activities.",
    image: "/images/aerial-stripes.jpg",
    alt: "Top-down aerial image of striped crop rows",
    icon: "Satellite",
  },
  {
    slug: "mobile-platform",
    title: "Mobile Platform",
    short: "Your field data, clear and ready on any device.",
    text: "Our mobile platform enhances accessibility to vital information, presenting data in a clear and user-friendly format that's optimized for mobile devices.",
    image: "/images/tablet-plants.jpg",
    alt: "Farmer browsing a tablet while inspecting plants",
    icon: "Smartphone",
  },
];

export const timeline: TimelineEntry[] = [
  {
    year: "2014",
    title: "Grean is founded",
    text: "From the outset, the business experienced rapid growth. Data processing was managed through intricate digital spreadsheets.",
  },
  {
    year: "2018",
    title: "Partnering with Solution Server",
    text: "As operations expanded we needed a tailored software solution, so Grean teamed up with Solution Server to build a custom application designed specifically for our business.",
  },
  {
    year: "2020",
    title: "Solution Server merges with Grean",
    text: "The success of the partnership led to a merger in June 2020, significantly enhancing our technological capabilities with an in-house development team.",
  },
  {
    year: "Today",
    title: "At the forefront of the industry",
    text: "A broad network of agricultural experts, a dedicated studio and a growing footprint — locally and globally — while remaining steadfast advocates for farmers.",
  },
];

export const principles: IconCard[] = [
  {
    title: "We don't sell inputs",
    text: "We don't sell fertilizers, lime, or chemicals. It's not part of our business model, and it never will be.",
    icon: "Ban",
  },
  {
    title: "We stay independent",
    text: "We're not answerable to any external entity that doesn't prioritize the farmer's best interests. As a true partner in agriculture, Grean remains completely independent.",
    icon: "ShieldCheck",
  },
  {
    title: "Nothing unnecessary",
    text: "We don't add unnecessary substances to the soil. We only introduce nutrients and soil enhancers when there's a clear deficiency that needs addressing.",
    icon: "Sprout",
  },
  {
    title: "No assumptions",
    text: "All our advice is rooted in precise, scientifically gathered data, carefully analyzed to determine the best course of action for each unique situation.",
    icon: "FlaskConical",
  },
  {
    title: "Never in isolation",
    text: "Collaboration is key. The farmer is at the heart of everything we do, and their active involvement in the process is vital to our mutual success.",
    icon: "Handshake",
  },
];

export const values: IconCard[] = [
  {
    title: "Integrity",
    text: "Honest, impartial advice — with no product to push and nothing to hide.",
    icon: "Scale",
  },
  {
    title: "Collaboration",
    text: "Farmers, agronomists and partners working from the same trusted data.",
    icon: "Users",
  },
  {
    title: "Expertise",
    text: "Deep knowledge of soil science backed by more than a decade of field data.",
    icon: "GraduationCap",
  },
  {
    title: "Transparency",
    text: "Clear reports and open methods, so you always know why we recommend what we do.",
    icon: "Eye",
  },
];

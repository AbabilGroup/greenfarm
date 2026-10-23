import Head from "next/head";
import { site } from "@/lib/site";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  email: site.email,
  foundingDate: site.founded,
  slogan: site.tagline,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressCountry: site.address.countryCode,
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: site.email,
    contactType: "customer support",
    availableLanguage: ["English", "French"],
  },
};

interface Breadcrumb {
  name: string;
  path: string;
}

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  breadcrumbs?: Breadcrumb[];
  jsonLd?: Record<string, unknown>[];
  noindex?: boolean;
}

/**
 * Per-page SEO: title, description, canonical, Open Graph, Twitter card and JSON-LD.
 * `path` is the route with trailing slash ("/" for home), matching next.config trailingSlash.
 */
export default function Seo({ title, description = site.description, path = "/", image = site.ogImage, breadcrumbs, jsonLd = [], noindex = false }: SeoProps) {
  const fullTitle = title ? `${title} | ${site.name}` : `${site.name} — ${site.tagline} | Independent Soil Science for Farmers`;
  const url = `${site.url}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${site.url}${image}`;

  const schemas: Record<string, unknown>[] = [organizationLd, ...jsonLd];
  if (breadcrumbs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "/" }, ...breadcrumbs].map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${site.url}${b.path}`,
      })),
    });
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={site.locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
    </Head>
  );
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export -> `out/` folder, ready to upload to Hostinger cPanel (public_html)
  output: "export",
  // Every route becomes /route/index.html so Apache serves it without rewrites
  trailingSlash: true,
  // The image optimizer needs a Node server; static hosting serves files as-is
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;

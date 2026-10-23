import type { AppProps } from "next/app";
import { Fraunces, Inter } from "next/font/google";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

// Fonts are downloaded at build time and self-hosted inside out/_next — no Google request at runtime
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", axes: ["opsz"], style: ["normal", "italic"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${fraunces.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

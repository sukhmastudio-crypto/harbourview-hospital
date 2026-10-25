import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionObserver from "@/components/MotionObserver";
import { CONFIG } from "@/lib/data";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: { default: `${CONFIG.name} | Specialist care in Sydney`, template: `%s | ${CONFIG.name}` },
  description: "Cardiac, cancer, maternity, orthopaedic and paediatric care in Sydney, with a named nurse for every patient. Book online.",
  openGraph: { title: CONFIG.name, description: "Specialist care on the harbour. Book an appointment online.", type: "website", locale: "en_AU" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

// Runs before first paint: restores the saved theme and enables scroll animations.
const initScript = `(function(){try{var t=localStorage.getItem('hv_theme');if(t)document.documentElement.dataset.theme=t}catch(e){}
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js')})()`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: CONFIG.name,
  telephone: CONFIG.phoneLink,
  address: { "@type": "PostalAddress", streetAddress: "120 Harbour Street", addressLocality: "Sydney", addressRegion: "NSW", postalCode: "2000", addressCountry: "AU" },
  openingHours: "Mo-Su 00:00-23:59",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${display.variable} ${body.variable} font-sans antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:z-50 focus:m-3 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MotionObserver />
      </body>
    </html>
  );
}

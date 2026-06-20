import "./globals.css";
import Shell from "../components/Shell";
import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#1C140D",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://businessvolunteers.online"),
  title: {
    default: "Business Volunteers | Digital Marketing Agency in Noida, India",
    template: "%s",
  },
  description:
    "Founder-led digital marketing agency in Noida serving 89+ industries — SEO, Google & Meta ads, social media, web design and graphic design. Transparent pricing, measurable results.",
  keywords: ["digital marketing agency","SEO services","Google Ads","Meta Ads","social media marketing","website design","graphic design","Noida","India","Business Volunteers"],
  authors: [{ name: "Business Volunteers" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", siteName: "Business Volunteers", locale: "en_IN",
    title: "Business Volunteers | Digital Marketing Agency in Noida, India",
    description: "Founder-led digital marketing across 89+ industries — SEO, ads, social, web and design.",
    url: "https://businessvolunteers.online/",
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/img0.png" },
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://businessvolunteers.online/#org",
      name: "Business Volunteers",
      url: "https://businessvolunteers.online/",
      logo: "https://businessvolunteers.online/img0.png",
      description: "Founder-led digital marketing agency serving 89+ industries.",
      address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      contactPoint: { "@type": "ContactPoint", telephone: "+91-85869-89832", contactType: "sales", areaServed: "IN" },
    },
    {
      "@type": "WebSite",
      "@id": "https://businessvolunteers.online/#website",
      url: "https://businessvolunteers.online/",
      name: "Business Volunteers",
      publisher: { "@id": "https://businessvolunteers.online/#org" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}

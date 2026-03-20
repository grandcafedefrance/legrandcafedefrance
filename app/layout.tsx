import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import FooterWrapper from "@/components/FooterWrapper";
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grandcafe-nice.com"), // Update with real production domain when known
  title: "Groupe Grand Café de France - Restaurants de Luxe à Nice",
  description: "Découvrez nos 3 restaurants d'exception à Nice (Grand Café de France, Le Rooftop) et notre bar intimiste Rina's Bar sur la Rue Piétonne. Une expérience gastronomique unique.",
  keywords: "restaurant Nice, brasserie Nice, rooftop Nice, bar Nice, gastronomie Nice, restaurant luxe, Jean Médecin, Rue Piétonne",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Groupe Grand Café de France",
    title: "Groupe Grand Café de France - Restaurants de Luxe à Nice",
    description: "Découvrez nos brasseries d'exception et Rina's Bar à Nice.",
    // Default image if pages don't define one
    images: [{ url: "/grand-cafe-de-France-pietonne/hero/grand-cafe-france-nice-rue-pietonne-facade-3.jpg" }],
  },
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Groupe Grand Café de France",
  "url": "https://www.grandcafe-nice.com",
  "logo": "https://www.grandcafe-nice.com/logo.png", // Replace when known
  "description": "Groupe de restaurants de luxe et brasseries à Nice, incluant Le Grand Café de France (Jean Médecin & Zone Piétonne), Le Rooftop et Rina's Bar.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nice",
    "postalCode": "06000",
    "addressCountry": "FR"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+33-7-62-12-38-37",
      "contactType": "reservations"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}

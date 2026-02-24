import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stonequarrysealing.com"),
  title: {
    default:
      "Stone Quarry Sealing | Asphalt Sealcoating & Crack Filling in Waterford, PA",
    template: "%s | Stone Quarry Sealing",
  },
  description:
    "Family-owned asphalt sealcoating, crack filling, and line painting serving Erie County, Crawford County, and all of Northwest Pennsylvania since 2023. Protect your driveway or parking lot. Free estimates in Waterford, Erie, Meadville, Edinboro & beyond. Call (814) 722-5081.",
  keywords: [
    "sealcoating",
    "asphalt sealing",
    "crack filling",
    "line painting",
    "driveway sealing",
    "parking lot sealing",
    "sealcoating near me",
    "driveway sealing near me",
    "asphalt repair near me",
    "parking lot maintenance near me",
    "Waterford PA",
    "Erie PA sealcoating",
    "Meadville PA sealcoating",
    "Edinboro PA sealcoating",
    "Union City PA sealcoating",
    "Corry PA sealcoating",
    "Cambridge Springs PA",
    "Girard PA",
    "North East PA",
    "Fairview PA",
    "Northwest Pennsylvania",
    "Erie County asphalt sealing",
    "Crawford County asphalt sealing",
    "asphalt maintenance",
    "Stone Quarry Sealing",
  ],
  authors: [{ name: "Stone Quarry Sealing" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Stone Quarry Sealing",
    title:
      "Stone Quarry Sealing | Asphalt Sealcoating & Crack Filling in Waterford, PA",
    description:
      "Family-owned asphalt sealcoating, crack filling, and line painting serving Erie County, Crawford County & Northwest PA. Free estimates.",
    images: [
      {
        url: "/images/before-after/IMG_5515.jpeg",
        width: 1200,
        height: 630,
        alt: "Stone Quarry Sealing - Professional asphalt sealcoating in Northwest PA",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://stonequarrysealing.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://stonequarrysealing.com/#business",
  name: "Stone Quarry Sealing",
  description:
    "Family-owned asphalt sealcoating, crack filling, and line painting serving Erie County, Crawford County, and all of Northwest Pennsylvania since 2023.",
  url: "https://stonequarrysealing.com",
  telephone: "+1-814-722-5081",
  email: "Stonequarrysealing@gmail.com",
  foundingDate: "2023",
  image: "https://stonequarrysealing.com/images/logo.jpg",
  logo: "https://stonequarrysealing.com/images/logo.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2510 Stone Quarry Rd",
    addressLocality: "Waterford",
    addressRegion: "PA",
    postalCode: "16441",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.94,
    longitude: -79.98,
  },
  areaServed: [
    { "@type": "City", name: "Waterford", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "Erie", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "Meadville", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "Edinboro", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "Union City", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "Corry", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "Cambridge Springs", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "Girard", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "North East", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "City", name: "Fairview", containedInPlace: { "@type": "State", name: "Pennsylvania" } },
    { "@type": "AdministrativeArea", name: "Erie County, PA" },
    { "@type": "AdministrativeArea", name: "Crawford County, PA" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Asphalt Maintenance Services",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Sealcoating",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Asphalt Sealcoating",
              description: "Polymer seal coat application that protects asphalt from water, UV rays, and vehicle fluids. Dry to touch in 24-48 hours, lasts 2-3 years.",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Crack Filling",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Hot Rubberized Crack Filling",
              description: "Hot rubberized crack filler applied at 400°F, sealing cracks up to 3/4 inch wide with a durable 4-inch protective band.",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Line Painting",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Parking Lot Line Painting",
              description: "Professional LineLazer line painting for parking lots including custom layouts, ADA compliance markings, and traffic flow design.",
            },
          },
        ],
      },
    ],
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "07:00",
    closes: "19:00",
  },
  sameAs: ["https://www.facebook.com/share/1EqscQM6A2/"],
  priceRange: "$$",
  paymentAccepted: "Cash, Check, Credit Card",
  currenciesAccepted: "USD",
  knowsAbout: [
    "Asphalt Sealcoating",
    "Crack Filling",
    "Parking Lot Line Painting",
    "Driveway Maintenance",
    "Commercial Parking Lot Maintenance",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-md focus:bg-copper focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

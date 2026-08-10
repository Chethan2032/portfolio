import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const SITE_URL = "https://chethan2032.com";
const NAME = "Chethan Gangadharolla";
const TITLE = `${NAME} | Computer Science Student & Developer`;
const DESCRIPTION =
  "Chethan Gangadharolla — Computer Science student at Deakin University, Melbourne. Software developer and freelancer working with Python, web development, AI and Data Science.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: NAME,
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  keywords: [
    "Chethan Gangadharolla",
    "Chethan",
    "Chethan Deakin",
    "Chethan Melbourne",
    "Computer Science Student",
    "Deakin University",
    "Data Science",
    "Software Developer",
    "Freelancer",
    "Melbourne",
    "Portfolio",
  ],
  alternates: { canonical: SITE_URL },
  verification: {
    google: "UXnccoNbZi0rYtHBVZcZm0jsbQ2isjsF81z2RREDIz0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "profile",
    url: SITE_URL,
    siteName: NAME,
    locale: "en_AU",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
};

// Tells Google this page is about a specific person — powers name-search results
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  alternateName: "Chethan",
  url: SITE_URL,
  image: `${SITE_URL}/photo.jpg`,
  jobTitle: "Computer Science Student",
  description: DESCRIPTION,
  email: "mailto:gchethan2128@gmail.com",
  nationality: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Deakin University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melbourne",
      addressCountry: "AU",
    },
  },
  knowsAbout: [
    "Software Development",
    "Web Development",
    "Data Science",
    "Artificial Intelligence",
    "Python",
    "Entrepreneurship",
  ],
  sameAs: [
    "https://github.com/Chethan2032",
    "https://www.linkedin.com/in/chethan2032",
    "https://www.instagram.com/chethan.2032/",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-[#050508] text-white antialiased">{children}</body>
    </html>
  );
}

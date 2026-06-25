import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Chethan | Portfolio",
  description:
    "Computer Science Student at Deakin University | Software Developer | AI, Data Science & Web Development",
  keywords: [
    "Chethan",
    "Computer Science",
    "Deakin University",
    "Data Science",
    "Software Developer",
    "Melbourne",
    "Portfolio",
    "Freelancer",
  ],
  openGraph: {
    title: "Chethan | Portfolio",
    description:
      "Computer Science Student at Deakin University | Software Developer | AI, Data Science & Web Development",
    type: "website",
    url: "https://chethan2032.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Chethan | Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chethan | Portfolio",
    description:
      "Computer Science Student at Deakin University | Software Developer | AI, Data Science & Web Development",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#050508] text-white antialiased">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Chethan | Computer Science Student & Aspiring Developer",
  description:
    "Personal portfolio of Chethan — Bachelor of Computer Science student at Deakin University, Melbourne. Passionate about AI, Data Science, and Software Development.",
  keywords: ["Chethan", "Computer Science", "Deakin University", "Data Science", "Software Developer", "Melbourne"],
  openGraph: {
    title: "Chethan | Portfolio",
    description: "CS Student at Deakin University — AI, Data Science & Web Development",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#050508] text-white antialiased">{children}</body>
    </html>
  );
}

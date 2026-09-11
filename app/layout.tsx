import type { Metadata } from "next";
import { Anton, Inter, Mrs_Saint_Delafield, Playfair_Display } from "next/font/google";
import "./globals.css";

/* Poster face — the oversized PORTFOLIO wordmark only. */
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-anton",
  display: "swap",
});

/* Editorial serif — the name and every section heading. */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

/* Body copy, labels, small caps. */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* Signature only. */
const signature = Mrs_Saint_Delafield({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navendu Chaturvedi — Portfolio",
  description: "Full-stack developer building web apps and tools with Python, FastAPI, TypeScript, and React.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${playfair.variable} ${inter.variable} ${signature.variable}`}
    >
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}

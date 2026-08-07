import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://nexusmedxperts.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nexus MedXperts — Canada's One-Stop Healthcare Business Ecosystem",
    template: "%s · Nexus MedXperts",
  },
  description:
    "Nexus MedXperts connects healthcare professionals, clinics, investors, and patients across Canada — recruitment, consulting, staffing, clinic management, virtual care, and real estate under one trusted brand.",
  keywords: [
    "healthcare recruitment Canada",
    "physician consulting",
    "medical staffing Ontario",
    "clinic management",
    "virtual care",
    "medical real estate",
    "Nexus MedXperts",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Nexus MedXperts — Canada's One-Stop Healthcare Business Ecosystem",
    description:
      "End-to-end solutions for healthcare professionals, from graduation to retirement.",
    siteName: "Nexus MedXperts",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus MedXperts",
    description:
      "Canada's one-stop healthcare business ecosystem — recruitment, consulting, staffing, management, virtual care, and real estate.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>{children}</body>
    </html>
  );
}

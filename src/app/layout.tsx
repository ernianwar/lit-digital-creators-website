import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LIT Digital Creators | AI & Digital Transformation Consultancy Malaysia",
  description:
    "LIT Digital Creators helps organisations transform through AI, digitalisation, corporate training, HRDC claimable programs and digital workforce development.",
  keywords: [
    "AI",
    "Digital Transformation",
    "Corporate Training",
    "HRDC Claimable",
    "Malaysia",
    "AI Consultancy",
    "Digital Skills",
  ],
  openGraph: {
    title: "LIT Digital Creators | AI & Digital Transformation Consultancy Malaysia",
    description:
      "LIT Digital Creators helps organisations transform through AI, digitalisation, corporate training, HRDC claimable programs and digital workforce development.",
    url: "https://litdigitalcreators.com",
    siteName: "LIT Digital Creators",
    locale: "en_MY",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}

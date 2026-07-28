import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://litdigitalcreators.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LIT Digital Creators | AI & Digital Transformation Consultancy Malaysia",
    template: "%s | LIT Digital Creators",
  },
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
    "AI Training Malaysia",
    "AI for Leaders",
    "Digitalisation",
    "AI Adoption Strategy",
  ],
  openGraph: {
    title: "LIT Digital Creators | AI & Digital Transformation Consultancy Malaysia",
    description:
      "LIT Digital Creators helps organisations transform through AI, digitalisation, corporate training, HRDC claimable programs and digital workforce development.",
    url: siteUrl,
    siteName: "LIT Digital Creators",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LIT Digital Creators | AI & Digital Transformation Consultancy Malaysia",
    description:
      "LIT Digital Creators helps organisations transform through AI, digitalisation, corporate training, HRDC claimable programs and digital workforce development.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "google8b64bc3fbbc9c593",
  },
  icons: {
    icon: "/Images/Logo/LDC_Logo.png",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LIT Digital Creators",
              url: siteUrl,
              logo: `${siteUrl}/Images/Logo/LDC_Logo.png`,
              description:
                "AI & Digital Transformation Consultancy and Corporate Training provider in Malaysia.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "MY",
              },
              sameAs: [
                "https://www.linkedin.com/company/lit-digital-creators/",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}

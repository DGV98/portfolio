import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://hellodavid.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "David Gonzalez-Velez | Software Engineer & Researcher",
    template: "%s | David Gonzalez-Velez",
  },
  description:
    "David Gonzalez-Velez is a self-taught software engineer and researcher based in Chicago, Illinois, specializing in quantum computation, full-stack development, and AI-driven applications.",
  keywords: [
    "David Gonzalez-Velez",
    "Software Engineer",
    "Researcher",
    "Quantum Computing",
    "React",
    "TypeScript",
    "Python",
    "Chicago",
    "University of Chicago",
    "Molecular Engineering",
    "Full Stack Developer",
  ],
  authors: [{ name: "David Gonzalez-Velez", url: siteUrl }],
  creator: "David Gonzalez-Velez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "David Gonzalez-Velez",
    title: "David Gonzalez-Velez | Software Engineer & Researcher",
    description:
      "Self-taught software engineer and researcher based in Chicago, specializing in quantum computation and full-stack development.",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "David Gonzalez-Velez",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Gonzalez-Velez | Software Engineer & Researcher",
    description:
      "Self-taught software engineer and researcher based in Chicago, specializing in quantum computation and full-stack development.",
    images: ["/profile.png"],
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
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "David Gonzalez-Velez",
  url: siteUrl,
  image: `${siteUrl}/profile.png`,
  jobTitle: "Software Engineer & Researcher",
  description:
    "Self-taught software engineer and researcher specializing in quantum computation and full-stack development.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Chicago",
  },
  sameAs: [
    "https://github.com/DGV98",
    "https://www.linkedin.com/in/david-gonzalez-velez-379049100/",
  ],
  knowsAbout: [
    "Quantum Computing",
    "Software Engineering",
    "React",
    "TypeScript",
    "Python",
    "Full Stack Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}

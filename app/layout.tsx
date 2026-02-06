import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Labs by Pankaj Ghosh",
    template: "%s | Labs by Pankaj Ghosh",
  },
  description:
    "Explore Labs, Pankaj Ghosh's personal hub for innovative experiments, mini-projects, and reusable code components. Discover open-source tools, tutorials, and snippets designed to simplify web development, boost productivity, and inspire developers worldwide. Perfect for learning React, Next.js, TypeScript, and more.",
  keywords: [
    "web development",
    "Next.js experiments",
    "reusable components",
    "open-source code",
    "developer tools",
    "React projects",
    "TypeScript tutorials",
    "mini-projects",
    "coding playground",
  ],
  authors: [{ name: "Pankaj Ghosh", url: "https://x.com/im_pankajghosh" }],
  creator: "Pankaj Ghosh",
  applicationName: "Labs",
  metadataBase: new URL("https://pankajghosh-labs.vercel.app"),
  alternates: {
    canonical: "/",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pankajghosh-labs.vercel.app/",
    siteName: "Labs by Pankaj Ghosh",
    title: "Labs by Pankaj Ghosh",
    description:
      "Dive into Labs: A curated collection of experiments, mini-projects, and reusable components by Pankaj Ghosh. Empower your development workflow with practical, shareable code that makes building apps easier and more efficient.",
    images: [
      {
        url: "https://res.cloudinary.com/ddws3mapm/image/upload/v1770362671/opengraph-image_gqj2xi.png",
        width: 1200,
        height: 630,
        alt: "Labs by Pankaj Ghosh - Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@im_pankajghosh",
    creator: "@im_pankajghosh",
    title: "Labs by Pankaj Ghosh",
    description:
      "Discover innovative code experiments and reusable components at Labs. Built by @im_pankajghosh to help developers create better apps faster.",
    images: [
      {
        url: "https://res.cloudinary.com/ddws3mapm/image/upload/v1770362671/opengraph-image_gqj2xi.png",
        alt: "Labs by Pankaj Ghosh - Twitter Card Image",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.scss";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PersonJsonLd from "@/components/seo/PersonJsonLd";
import WebsiteJsonLd from "@/components/seo/WebsiteJsonLd";
import { siteConfig } from "@/config/site";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | Abdul Kareem",
  },

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  authors: [
    {
      name: siteConfig.author.name,
    },
  ],

  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,

  applicationName: `${siteConfig.name} Portfolio`,

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: `${siteConfig.name} Portfolio`,

    title: siteConfig.title,
    description: siteConfig.description,

    images: [
      {
        url: siteConfig.ogImage.url,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage.url],
  },

  alternates: {
    canonical: "/",
  },

  category: "technology",
};

const themeScript = `
  (function () {
    try {
      var storedTheme = localStorage.getItem("theme");

      if (storedTheme === "dark" || storedTheme === "light") {
        document.documentElement.dataset.theme = storedTheme;
        return;
      }

      var prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      document.documentElement.dataset.theme =
        prefersDark ? "dark" : "light";
    } catch (error) {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body id="top">
        <ThemeProvider>
          <PersonJsonLd />
          <WebsiteJsonLd />
          <Navbar />

          {children}

          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
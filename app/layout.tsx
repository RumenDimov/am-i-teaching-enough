import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientErrorBoundary } from "@/components/ClientErrorBoundary";
import { ToastProvider } from "@/components/ui/toast";
import { OfflineDetector } from "@/components/OfflineDetector";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://amiteachingenough.com";
const siteName = "Am I Teaching Enough?";
const siteDescription = "Free 3-minute assessment helping UK homeschool parents measure their child's progress against National Curriculum milestones. Get instant, encouraging feedback with no email required.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Am I Teaching Enough? | UK Homeschool Assessment Tool",
    template: "%s | Am I Teaching Enough?"
  },
  description: siteDescription,
  keywords: [
    "homeschool UK",
    "homeschooling assessment",
    "National Curriculum",
    "home education UK",
    "child development assessment",
    "Reception assessment",
    "Year 3 assessment",
    "homeschool progress tracker",
    "educational milestones",
    "UK home education",
    "free homeschool assessment",
    "parenting support UK"
  ],
  authors: [{ name: "Am I Teaching Enough Team" }],
  creator: "Am I Teaching Enough",
  publisher: "Am I Teaching Enough",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: siteName,
    title: "Am I Teaching Enough? | Free UK Homeschool Assessment",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Am I Teaching Enough? - UK Homeschool Assessment Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Am I Teaching Enough? | Free UK Homeschool Assessment",
    description: siteDescription,
    images: ["/og-image.png"],
    creator: "@amiteachingenough",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "education",
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
    },
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'parent',
    },
    inLanguage: 'en-GB',
    isAccessibleForFree: true,
    keywords: 'homeschool UK, National Curriculum assessment, home education, child development',
  };

  return (
    <html lang="en-GB">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#10B981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ClientErrorBoundary>
          <ToastProvider>
            <OfflineDetector />
            {children}
          </ToastProvider>
        </ClientErrorBoundary>
      </body>
    </html>
  );
}

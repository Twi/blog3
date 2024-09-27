import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/footer";
import { site } from "@/data/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: "%s - " + site.title,
  },
  description: site.description,
  alternates: {
    types: {
      "application/rss+xml": "/blog.rss",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <SpeedInsights />
        <div className="bg-gray-50 dark:bg-gray-800 dark:text-gray-50 font-[family-name:var(--font-geist-sans)]">
          <div className="p-4 mx-auto max-w-screen-md">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

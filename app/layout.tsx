import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Strong Towns Dearborn - Building a Stronger Community",
  description: "Join Strong Towns Dearborn in building a stronger, more resilient community through better urban planning and community engagement.",
  keywords: ["Strong Towns", "Dearborn", "urban planning", "community development", "Michigan", "local activism"],
  authors: [{ name: "Strong Towns Dearborn" }],
  openGraph: {
    title: "Strong Towns Dearborn",
    description: "Building a stronger, more resilient community through better urban planning and community engagement.",
    url: "https://strongtownsdearborn.com",
    siteName: "Strong Towns Dearborn",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strong Towns Dearborn",
    description: "Building a stronger, more resilient community through better urban planning and community engagement.",
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
        {children}
      </body>
    </html>
  );
}

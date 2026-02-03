import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-cursive",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Hernan Chalco — Senior Implementation Engineer",
  description:
    "Senior Implementation Engineer at Adyen. Building developer tooling for eCommerce payment integrations. Projects: checkoutlab.dev, sdkexplorer.com.",
  icons: {
    icon: "/icons/golden-gate-bridge-2.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

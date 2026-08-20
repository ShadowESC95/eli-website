import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://geteli.tech"),
  title: "ELI — the assistant that runs on your machine",
  description:
    "A complete AI assistant that runs entirely on your own hardware. Voice, vision, memory and 223 capabilities — offline by default, with no account and no telemetry.",
  keywords: [
    "local AI", "offline AI assistant", "private AI", "on-device AI",
    "self-hosted assistant", "ELI",
  ],
  openGraph: {
    title: "ELI — the assistant that runs on your machine",
    description:
      "Voice, vision, memory and 223 capabilities, running entirely on your own hardware. Offline by default.",
    url: "https://geteli.tech",
    siteName: "ELI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELI — the assistant that runs on your machine",
    description:
      "A complete AI assistant that runs on your own hardware. Offline by default.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

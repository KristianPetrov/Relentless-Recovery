import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar";
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
  title: {
    default: "Relentless Recovery",
    template: "%s | Relentless Recovery",
  },
  description: "Faith-forward recovery placement and guidance",
  keywords: [
    "recovery",
    "substance use",
    "mental health",
    "treatment placement",
    "California",
    "Nashville",
    "faith",
    "family",
    "community",
  ],
  authors: [{ name: "Set Free Digital Disciples", url: "https://www.setfreedigitaldisciples.com" }],
  icons: {
    icon: [{ url: "/relentless-recovery-cross-logo.png", type: "image/png" }],
    shortcut: [{ url: "/relentless-recovery-cross-logo.png", type: "image/png" }],
    apple: [{ url: "/relentless-recovery-cross-logo.png" }],
  },
  openGraph: {
    title: "Relentless Recovery",
    description: "Faith-forward recovery placement and guidance",
    siteName: "Relentless Recovery",
    images: [
      {
        url: "/relentless-recovery-cross-logo.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Relentless Recovery",
    description: "Faith-forward recovery placement and guidance",
    images: ["/relentless-recovery-cross-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-white to-gray-50 text-gray-900`}>
        <NavBar />
        {children}
        <footer className="border-t border-gray-200 mt-8">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex items-center justify-center gap-3 text-sm text-gray-600">
            <Link
              href="https://www.setfreedigitaldisciples.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:underline underline-offset-4"
            >
              <Image
                src="/SetFreeDigitalDisciplesPortal.png"
                alt="Set Free Digital Disciples"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
              />
              <span>Website designed by Set Free Digital Disciples</span>
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

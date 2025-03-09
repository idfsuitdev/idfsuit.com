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
  title: "IDFSUIT Productions LLC | Crime Drama & Urban Sitcoms",
  description: "Production company specializing in crime drama and urban underground sitcoms with a noir aesthetic and black tie sophistication.",
  keywords: ["production company", "crime drama", "urban sitcoms", "noir", "film production"],
  authors: [{ name: "IDFSUIT Productions LLC" }],
  creator: "IDFSUIT Productions LLC",
  publisher: "IDFSUIT Productions LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background-primary text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}

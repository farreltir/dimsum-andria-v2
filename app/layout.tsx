import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { RESTAURANT_NAME } from "@/lib/constants";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: RESTAURANT_NAME,
  description:
    "Authentic dim sum restaurant offering a variety of traditional Chinese dumplings and dishes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

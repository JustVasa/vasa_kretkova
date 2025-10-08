import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Makeup Studio",
  description: "Permanent makeup & beauty",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="ff-sans bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}

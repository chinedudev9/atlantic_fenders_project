import type { Metadata } from "next";
import { Noto_Serif, Inter, } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/context/ThemeContext";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"], // You can add other weights like "500", "600", etc.
  display: "swap",
  variable: "--font-noto-serif",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Atlantic Fenders",
  description: "Atlantic Fenders & Support Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerif.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

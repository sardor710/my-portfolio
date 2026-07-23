import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dahlia Floral & Event Design | Свадебный цветочный декор",
  description:
    "Захватывающий цветочный декор, украшающий день вашей мечты. Dahlia Floral & Event Design — потрясающие цветочные произведения искусства для вашей свадьбы.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${lora.variable} antialiased`}>
      <body className="min-h-screen bg-white text-ink">{children}</body>
    </html>
  );
}

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
  title: "Moret Flowers | Свадебный цветочный декор в Ташкенте",
  description:
    "Захватывающий цветочный декор, украшающий день вашей мечты. Moret Flowers — потрясающие цветочные произведения искусства для вашей свадьбы в Ташкенте.",
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

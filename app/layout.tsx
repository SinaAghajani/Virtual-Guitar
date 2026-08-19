import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Virtual Guitar | گیتار مجازی",
  description: "گیتار مجازی آنلاین؛ با موس، لمس صفحه یا کیبورد گیتار بنوازید.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} antialiased`}>
      <body className="min-h-screen bg-[#0b0b0b] text-white">{children}</body>
    </html>
  );
}

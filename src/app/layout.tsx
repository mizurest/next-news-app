import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Sans_JP } from "next/font/google";
import "yakuhanjp"

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const IBMPlexSansJP = IBM_Plex_Sans_JP({
  weight: ["400", "700"],
  variable: "--font-ibmplexsansjp",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "ニュースアプリ（学習用）",
  description: "Next.jsをキャッチアップするために作成するニュースアプリです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={IBMPlexSansJP.variable}>{children}</body>
    </html>
  );
}

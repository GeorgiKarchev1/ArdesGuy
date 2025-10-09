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
  title: "AiMarketing.bg - Научи се да бъдеш известен в социалните мрежи",
  description: "Историята зад TikTok канала на Ardes.bg с над 400 млн. гледания. Научи се да създаваш viral видеа и да изграждаш личен бранд в социалните мрежи.",
  keywords: "социални мрежи, TikTok, видео маркетинг, личен бранд, viral видеа, Ardes, България",
  authors: [{ name: "Ardes.bg Team" }],
  creator: "Ardes.bg",
  publisher: "AiMarketing.bg",
  openGraph: {
    title: "AiMarketing.bg - Научи се да бъдеш известен в социалните мрежи",
    description: "Историята зад TikTok канала на Ardes.bg с над 400 млн. гледания",
    url: "https://aimarketing.bg",
    siteName: "AiMarketing.bg",
    locale: "bg_BG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiMarketing.bg - Научи се да бъдеш известен в социалните мрежи",
    description: "Историята зад TikTok канала на Ardes.bg с над 400 млн. гледания",
    creator: "@ardesbg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

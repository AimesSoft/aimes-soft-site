import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aimes-soft.com"),
  title: "Aimes Soft",
  description:
    "Aimes Soft builds cross-platform media, creative and agent tools with artificial intelligence, time and love.",
  icons: {
    icon: "/brand/logo2.webp",
    shortcut: "/brand/logo2.webp",
    apple: "/brand/logo2.webp",
  },
  openGraph: {
    title: "Aimes Soft",
    description: "人工智能，时间和爱。",
    url: "https://www.aimes-soft.com",
    siteName: "Aimes Soft",
    images: [
      {
        url: "/brand/logo2.webp",
        width: 512,
        height: 512,
        alt: "Aimes Soft logo",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

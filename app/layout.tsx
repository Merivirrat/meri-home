import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meri的主页",
  description: "爱，舞萌与数学。本科生 Meri 的个人主页，记录几何与数论方向的笔记与讲义。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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

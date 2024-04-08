import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { MenuMobile } from "@/components/menu-mobile";

const sora = Sora({ subsets: ["latin"], weight: ["200", "400", "600", "800"] });

export const metadata: Metadata = {
  title: "Francy Santos | Portfólio",
  description: "Front-End Developer & UI Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={(sora.className, "bg-mainBackground overflow-hidden")}>
        <Header />
        {children}
        <MenuMobile />
      </body>
    </html>
  );
}

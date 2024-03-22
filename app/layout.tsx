import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={(inter.className, "bg-mainBackground ")}>
        <div className="w-full bg-gradient-to-b from-mainBackground h-[95px] fixed top-0 z-50 left-0 right-0">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}

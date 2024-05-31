import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoReg Staff",
  description: "GoHealth Registration Staff Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-200 antialiased">
        <Navbar />
        <main className="pt-[74px]">{children}</main>
      </body>
    </html>
  );
}

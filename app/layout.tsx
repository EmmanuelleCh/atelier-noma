import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Alma Starter",
  description: "Ma base de développement web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1 pt-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

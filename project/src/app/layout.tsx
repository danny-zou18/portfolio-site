import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {NextUIProvider} from "@nextui-org/react";

import Navbar from "./_components/Navbar";
import ContactModal from "./_components/ContactModal";

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
      <body className={`${inter.className}`} >
        <NextUIProvider className="dark">
          <Navbar />
          <ContactModal />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}

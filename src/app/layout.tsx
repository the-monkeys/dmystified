import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";
import FloatingWhatsAppButton from "@/components/WhatsappSupport";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dmystified.tech/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  title: "Empower Your Future with Expert Learning",
  description:
    "Welcome to Dmystified, your gateway to mastering technology.Whether you are an aspiring developer or a seasoned pro, our teaching empower you with the skills needed to thrive in the tech world.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <FloatingWhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}

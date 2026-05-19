import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Preloader from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrimeEdge Academy | Premium Coaching Institute",
  description: "Join PrimeEdge Academy for expert faculty, regular tests, and personal mentorship. Top results in Class 9-12, IIT-JEE, and NEET.",
  keywords: "coaching center, IIT-JEE preparation, NEET coaching, board exams coaching, PrimeEdge Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full font-sans bg-slate-50">
        {/* First-load preloader — renders once, fades out automatically */}
        <Preloader />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}

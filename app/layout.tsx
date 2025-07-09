import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata : Metadata= {
  title: 'Alumni Relations Cell MEC',
  description: 'Welcome to the official website of the Alumni Relations Cell at Model Engineering College.',
  openGraph: {
    title: 'Alumni Relations Cell - MEC',
    description: 'Fostering alumni connections, events, and mentorship at MEC.',
    url: 'https://arc-nextjs.vercel.app/',
    images: [
      {
        url: '/common/logo_arc.png',
        width: 1200,
        height: 630,
        alt: 'Home Preview Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alumni Relations Cell - MEC',
    description: 'Fostering alumni connections, events, and mentorship at MEC.',
    images: ['/common/logo_arc.png'],
  },
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
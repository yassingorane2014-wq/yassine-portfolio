import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const interDisplay = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter-display',
  weight: ['700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Yassine Naimi - Customer Service & Sales Professional",
  description: "Bilingual (French/English/Arabic) customer service and sales professional with 4+ years of experience in high-volume call centers and sales environments. Proven track record of exceeding sales targets and maintaining high customer satisfaction scores.",
  keywords: ["Yassine Naimi", "Customer Service", "Sales", "Call Center", "Bilingual", "Ottawa", "Portfolio"],
  authors: [{ name: "Yassine Naimi" }],
  openGraph: {
    title: "Yassine Naimi - Customer Service & Sales Professional",
    description: "Bilingual customer service and sales professional with 4+ years of experience in high-volume call centers and sales environments.",
    url: "https://yassinenaimi.com",
    siteName: "Yassine Naimi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yassine Naimi - Customer Service & Sales Professional",
    description: "Bilingual customer service and sales professional with 4+ years of experience in high-volume call centers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={`${inter.variable} ${interDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

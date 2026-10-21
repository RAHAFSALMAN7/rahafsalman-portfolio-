import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "Rahaf Salman — Frontend Developer",
  description: "Frontend developer building fast, polished, production-ready websites with React, Next.js, and Shopify. Currently a Web Developer at 255 Advertising.",
  keywords: ["Rahaf Salman", "Frontend Developer", "Web Developer", "React", "Next.js", "Shopify", "E-commerce", "Palestine"],
  authors: [{ name: "Rahaf Salman" }],
  openGraph: {
    title: "Rahaf Salman — Frontend Developer",
    description: "Building fast, polished, production-ready web experiences.",
    type: "website",
  },
};

// Applies the saved theme before first paint to avoid a light/dark flash
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(!t){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

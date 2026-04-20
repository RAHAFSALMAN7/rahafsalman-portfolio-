import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Rahaf Salman — Frontend Developer",
  description: "Computer Science graduate specializing in Software Engineering and modern web development. Building scalable digital solutions.",
  keywords: ["Rahaf Salman", "Frontend Developer", "React", "Next.js", "Palestine"],
  authors: [{ name: "Rahaf Salman" }],
  openGraph: {
    title: "Rahaf Salman — Frontend Developer",
    description: "Building scalable digital solutions",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

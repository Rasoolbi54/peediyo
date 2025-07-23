import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationEvents } from "@/components/navigation-events";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Peediyo Marketing Agency - Digital Growth Partner",
  description:
    "Peediyo is an award-winning digital marketing agency specializing in driving revenue and growth through data-driven strategies.",
  generator: "v0.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { NextAuthProvider } from "./components/NextAuthProvider";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js 14 Movie Server",
  description: "Movie server built with Next.js 14, and inspired by Netflix.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(rubik.className, "antialiased")}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}

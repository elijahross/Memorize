"use client";
import type { Metadata } from "next";
import config from "@/amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

Amplify.configure(config, {
  ssr: true, // required when using Amplify with Next.js
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: `
            radial-gradient(600px circle at 50% 0%, rgba(59, 130, 246, 0.15), transparent 50%),
            linear-gradient(to bottom, #dbeafe 0%, #ffffff 40%, #ffffff 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")
          `,
          backgroundSize: 'cover, cover, 200px 200px',
          backgroundAttachment: 'fixed, fixed, fixed',
          minHeight: '100vh'
        }}
      >
        {/* Alternative approach using pseudo-element */}
        <div 
          className="fixed inset-0 pointer-events-none"
          style={{
            background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.12'/%3E%3C/svg%3E")`,
            backgroundSize: '150px 150px',
            mixBlendMode: 'multiply',
            maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
          }}
        />

        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
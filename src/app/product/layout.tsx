import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";

// src/product/layout.tsx
export default function ProductLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-100">{children}</main>
      </div>
    );
  }
  
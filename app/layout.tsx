import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "DocuLens MVP",
  description: "Plataforma personal de inteligencia documental human-in-the-loop."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen bg-mist lg:flex">
          <Sidebar />
          <main className="flex-1 px-6 py-8 lg:px-10 lg:py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}

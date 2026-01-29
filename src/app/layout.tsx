import type { Metadata } from "next";
import "./globals.css";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Ayuntamiento de Jamapa, Veracruz",
  description: "Sitio oficial del Ayuntamiento de Jamapa, Veracruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-white text-slate-900 pt-16">
        {/* Header fijo */}
        <SiteHeader />

        {/* Contenido */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <SiteFooter />
      </body>
    </html>
  );
}

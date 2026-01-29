import "./globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Ayuntamiento de Jamapa, Veracruz",
  description:
    "Sitio informativo del Ayuntamiento de Jamapa, Veracruz. Juntos por la Transformación.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

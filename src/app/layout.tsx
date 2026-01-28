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
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased">
        <SiteHeader />

        {/* Aviso institucional global */}
        <div className="bg-amber-50 border-b border-amber-200">
          <div className="container-page py-2 text-sm text-amber-900">
            Este sitio se encuentra en proceso de actualización.
          </div>
        </div>

        <main className="flex-1">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}

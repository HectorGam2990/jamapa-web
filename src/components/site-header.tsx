"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/gobierno", label: "Gobierno" },
  { href: "/municipio", label: "Municipio" },
  { href: "/noticias", label: "Noticias" },
  { href: "/transparencia", label: "Transparencia" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      {/* Franja institucional */}
      <div className="bg-[var(--jamapa-wine)] text-white">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between text-xs md:text-sm">
          <span className="font-semibold">Sitio oficial</span>
          <span className="hidden sm:block text-white/90">
            Juntos por la Transformación
          </span>
          <Link href="/contacto" className="hover:underline">
            Atención ciudadana
          </Link>
        </div>
      </div>

      {/* Header principal */}
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-[150px] rounded-xl border bg-white overflow-hidden">
              <Image
                src="/logo-jamapa.jpg"
                alt="Ayuntamiento de Jamapa"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-semibold">Ayuntamiento de Jamapa</p>
              <p className="text-xs text-slate-600">Veracruz</p>
            </div>
          </Link>

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Menú móvil */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-xl border px-3 py-2 text-sm"
          >
            ☰
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 rounded-2xl border bg-white p-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-sm hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

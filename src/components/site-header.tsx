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
    <header className="sticky top-0 z-50 border-b bg-white/85 backdrop-blur">
      {/* Franja institucional */}
      <div className="bg-[var(--jamapa-wine)] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-xs md:text-sm">
          <span className="font-medium">Sitio oficial</span>
          <span className="hidden sm:block text-white/90">
            Juntos por la Transformación
          </span>
          <Link href="/contacto" className="font-medium underline-offset-4 hover:underline">
            Atención ciudadana
          </Link>
        </div>
      </div>

      {/* Barra principal */}
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-[150px] overflow-hidden rounded-xl border bg-white">
              <Image
                src="/logo-jamapa.jpg"
                alt="Ayuntamiento de Jamapa"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-semibold text-slate-900 md:text-base">
                Ayuntamiento de Jamapa
              </p>
              <p className="text-xs text-slate-600">Veracruz</p>
            </div>
          </Link>

          {/* Menú desktop */}
          <nav className="hidden items-center gap-2 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Botón móvil */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border px-3 py-2 text-sm font-medium md:hidden"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>

        {/* Menú móvil */}
        {open && (
          <div className="mt-3 rounded-2xl border bg-white p-2 md:hidden">
            <div className="grid gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

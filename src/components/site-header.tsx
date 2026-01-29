"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    // Bloquea scroll cuando el menú está abierto
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] bg-white/95 backdrop-blur border-b border-slate-200">
      {/* Barrita arriba (vino) */}
      <div className="bg-[#6B1028] text-white text-xs">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <span>Sitio oficial</span>
          <span className="hidden sm:inline">Atención ciudadana</span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between gap-3">
        {/* Marca / Logo */}
        <Link href="/" className="flex items-center gap-3 min-w-0">
          {/* Si ya tienes el logo como JPG, cámbialo aquí: /logo-jamapa.jpg */}
          <img
            src="/logo-jamapa.jpg"
            alt="Ayuntamiento de Jamapa"
            className="h-9 w-auto"
          />
          <div className="leading-tight min-w-0">
            <div className="font-semibold text-slate-900 truncate">
              Ayuntamiento de Jamapa
            </div>
            <div className="text-xs text-slate-500">Veracruz</div>
          </div>
        </Link>

        {/* Nav escritorio */}
        <nav className="hidden md:flex items-center gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-slate-200 hover:bg-slate-50"
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Overlay + panel móvil */}
      {open && (
        <div className="md:hidden fixed inset-0 z-[110]">
          {/* Overlay oscuro (esto evita el “transparente” sobre el hero) */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="absolute top-0 right-0 h-full w-[86%] max-w-sm bg-white shadow-xl border-l border-slate-200">
            <div className="h-14 px-4 flex items-center justify-between border-b border-slate-200">
              <div className="font-semibold">Menú</div>
              <button
                className="h-10 w-10 rounded-xl border border-slate-200 hover:bg-slate-50"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                ✕
              </button>
            </div>

            <div className="p-4 flex flex-col gap-2">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

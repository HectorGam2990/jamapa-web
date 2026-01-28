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

  // Cierra con ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Bloquea scroll cuando el menú está abierto (mejor UX en móvil)
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-[60] border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* Barra superior */}
      <div className="bg-[#6b1135] text-white">
        <div className="container-page flex items-center justify-between py-2 text-xs">
          <span className="font-semibold tracking-wide">Sitio oficial</span>
          <span className="hidden md:block opacity-90">
            Juntos por la Transformación
          </span>
          <Link
            className="font-semibold underline-offset-4 hover:underline"
            href="/contacto"
            onClick={() => setOpen(false)}
          >
            Atención ciudadana
          </Link>
        </div>
      </div>

      {/* Header principal */}
      <div className="container-page py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <img
              src="/logo-jamapa.jpg"
              alt="Ayuntamiento de Jamapa"
              className="h-10 w-auto"
            />
            <div className="leading-tight">
              <p className="text-sm font-extrabold">Ayuntamiento de Jamapa</p>
              <p className="text-xs text-slate-600">Veracruz</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile button */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold hover:bg-slate-50"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY + DRAWER (superior a TODO) */}
      {open && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Overlay sólido para que NO se vea el hero “atravesado” */}
          <button
            className="absolute inset-0 bg-black/60"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 p-4">
              <p className="text-sm font-extrabold">Menú</p>
              <button
                className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold hover:bg-slate-50"
                aria-label="Cerrar"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              <div className="grid gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-bold text-slate-700">
                  Atención ciudadana
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Cuartel 2, Jamapa, Veracruz
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Lun–Vie 10:00–17:30
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

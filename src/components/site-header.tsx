"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/gobierno", label: "Gobierno" },
  { href: "/municipio", label: "Municipio" },
  { href: "/transparencia", label: "Transparencia" },
  { href: "/contacto", label: "Contacto" },
];

function NavLink({
  href,
  label,
  onClick,
  active,
}: {
  href: string;
  label: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={[
        "rounded-xl px-3 py-2 text-sm font-medium transition",
        active
          ? "bg-slate-900 text-white"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Bloquea el scroll del body cuando el menÃº estÃ¡ abierto
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Barra superior vino */}
      <div className="fixed inset-x-0 top-0 z-[60] h-16">
        <div className="h-4 bg-[#5b0f2e] text-white">
          <div className="mx-auto flex h-4 max-w-6xl items-center justify-between px-4 text-[10px] tracking-wide">
            <span>Sitio oficial</span>
            <span className="hidden sm:inline">Juntos por la TransformaciÃ³n</span>
            <span>AtenciÃ³n ciudadana</span>
          </div>
        </div>

        {/* Header blanco */}
        <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-16 overflow-hidden">
                <Image
                  src="/logo-jamapa.jpg"
                  alt="Logo Jamapa"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="leading-tight">
                <div className="text-sm font-extrabold text-slate-900">
                  Ayuntamiento de Jamapa
                </div>
                <div className="text-xs text-slate-600">Veracruz</div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {NAV.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  active={pathname === item.href}
                />
              ))}
            </nav>

            {/* Mobile button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              onClick={() => setOpen(true)}
              aria-label="Abrir menÃº"
            >
              â˜°
            </button>
          </div>
        </header>
      </div>

      {/* Overlay + Drawer mÃ³vil (SUPER por encima, NO transparente feo) */}
      {open && (
        <div className="fixed inset-0 z-[80]">
          {/* Fondo oscuro */}
          <button
            aria-label="Cerrar menÃº"
            className="absolute inset-0 bg-black/55"
            onClick={() => setOpen(false)}
            type="button"
          />

          {/* Panel */}
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="text-base font-extrabold text-slate-900">MenÃº</div>
              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold hover:bg-slate-50"
                onClick={() => setOpen(false)}
                aria-label="Cerrar"
              >
                âœ•
              </button>
            </div>

            <div className="p-4">
              <div className="grid gap-2">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                      pathname === item.href
                        ? "border-slate-900 bg-slate-900 text-white"
                        : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-bold text-slate-900">
                  UbicaciÃ³n
                </div>
                <div className="mt-1 text-sm text-slate-700">
                  Ayuntamiento de Jamapa
                  <br />
                  Cuartel 2, Jamapa, Veracruz
                </div>
                <Link
                  className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                  href="https://www.google.com/maps/search/?api=1&query=Ayuntamiento+de+Jamapa"
                  target="_blank"
                >
                  Abrir en Google Maps
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


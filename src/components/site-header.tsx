import Link from "next/link";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/gobierno", label: "Gobierno" },
  { href: "/municipio", label: "Municipio" },
  { href: "/noticias", label: "Noticias" },
  { href: "/transparencia", label: "Transparencia" },
  { href: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      {/* Barra superior */}
      <div className="bg-[#6b1135] text-white">
        <div className="container-page flex items-center justify-between py-2 text-xs">
          <span className="font-semibold tracking-wide">Sitio oficial</span>
          <span className="hidden md:block opacity-90">
            Juntos por la Transformación
          </span>
          <Link className="font-semibold underline-offset-4 hover:underline" href="/contacto">
            Atención ciudadana
          </Link>
        </div>
      </div>

      {/* Header principal */}
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
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

        {/* mini botón menú (placeholder) */}
        <div className="lg:hidden">
          <button className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold hover:bg-slate-50">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

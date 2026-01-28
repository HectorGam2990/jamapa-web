import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-slate-900">
              Ayuntamiento de Jamapa
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Sitio informativo institucional. Fase 1 (informativa).
            </p>
            <p className="mt-4 text-xs text-slate-500">
              © {new Date().getFullYear()} Jamapa, Veracruz
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-900">Enlaces</p>
            <ul className="mt-3 grid gap-2 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/gobierno">
                  Gobierno
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/municipio">
                  Municipio
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/noticias">
                  Noticias
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/transparencia">
                  Transparencia
                </Link>
              </li>
            </ul>
          </div>

          <div id="atencion">
            <p className="text-sm font-semibold text-slate-900">Contacto</p>
            <p className="mt-3 text-sm text-slate-600">
              Aquí colocaremos teléfono, correo, dirección y horarios oficiales.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              Mientras tanto:{" "}
              <Link href="/contacto" className="font-medium text-[var(--jamapa-teal)] hover:underline">
                Ir a Contacto
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

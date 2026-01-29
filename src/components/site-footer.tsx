export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-extrabold text-slate-900">
              Ayuntamiento de Jamapa
            </div>
            <div className="mt-2 text-sm text-slate-600">
              Sitio informativo (Fase 1). Próximamente trámites y servicios.
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-slate-900">Contacto</div>
            <div className="mt-2 text-sm text-slate-600">
              Cuartel 2, Jamapa, Veracruz
              <br />
              Lun–Vie 10:00–17:30
            </div>
          </div>

          <div>
            <div className="text-sm font-bold text-slate-900">Legal</div>
            <div className="mt-2 text-sm text-slate-600">
              © {new Date().getFullYear()} Ayuntamiento de Jamapa.
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-slate-500">
          Hecho con Next.js + Tailwind.
        </div>
      </div>
    </footer>
  );
}

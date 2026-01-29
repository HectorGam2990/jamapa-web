export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="font-semibold text-slate-900">
              Ayuntamiento de Jamapa, Veracruz
            </div>
            <div>Juntos por la Transformación</div>
          </div>

          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} — Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}

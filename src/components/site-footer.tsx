export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <div>
          <p className="text-sm font-extrabold">Ayuntamiento de Jamapa</p>
          <p className="mt-2 text-sm text-slate-600">
            Sitio informativo oficial. Transparencia, servicios y atención ciudadana.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold">Enlaces</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Gobierno</li>
            <li>Municipio</li>
            <li>Transparencia</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold">Contacto</p>
          <p className="mt-3 text-sm text-slate-600">
            Cuartel 2, Jamapa, Veracruz
          </p>
          <p className="mt-1 text-sm text-slate-600">Horario: Lun–Vie 10:00–17:30</p>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Ayuntamiento de Jamapa, Veracruz. Todos los derechos reservados.
      </div>
    </footer>
  );
}

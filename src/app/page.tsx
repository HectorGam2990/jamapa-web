import Link from "next/link";

const quickLinks = [
  { title: "Gobierno", desc: "Cabildo, dependencias y directorio.", href: "/gobierno" },
  { title: "Municipio", desc: "Historia, ubicación y comunidades.", href: "/municipio" },
  { title: "Noticias", desc: "Comunicados y avisos oficiales.", href: "/noticias" },
  { title: "Transparencia", desc: "Acceso a información pública.", href: "/transparencia" },
];

const services = [
  { title: "Atención ciudadana", desc: "Orientación y canalización.", href: "/contacto" },
  { title: "Avisos y comunicados", desc: "Información oficial al día.", href: "/noticias" },
  { title: "Transparencia", desc: "Obligaciones y documentos.", href: "/transparencia" },
  { title: "Directorio", desc: "Áreas y responsables.", href: "/gobierno" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/80">
            Sitio oficial
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            Ayuntamiento de Jamapa, Veracruz
          </h1>

          <p className="mt-4 max-w-2xl text-base text-white/90 md:text-lg">
            Gobierno municipal comprometido con el desarrollo, la transparencia y el bienestar
            de la ciudadanía.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-secondary">
              Contacto
            </Link>
            <Link
              href="/noticias"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Ver noticias
            </Link>
          </div>

          {/* Banner de avisos (pro) */}
          <div className="mt-10 rounded-2xl border border-white/25 bg-white/10 p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Aviso destacado</p>
                <p className="mt-1 text-sm text-white/90">
                  Este espacio se usa para comunicados urgentes (cortes, campañas, horarios, etc.).
                </p>
              </div>
              <Link
                href="/noticias"
                className="inline-flex w-fit items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 hover:bg-white/90"
              >
                Ir a avisos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold">Servicios e información</h2>
            <p className="mt-2 text-slate-600">
              Accesos rápidos. Fase 1 (informativa), listo para crecer.
            </p>
          </div>
          <span className="hidden badge md:inline">Fase 1</span>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="card group">
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold">{s.title}</p>
                <span className="text-slate-400 transition group-hover:text-slate-700">→</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <p className="mt-4 text-sm font-semibold text-[var(--jamapa-teal)]">
                Ver más
              </p>
            </Link>
          ))}
        </div>

        <div className="divider" />

        {/* Evento destacado */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card md:col-span-2">
            <p className="badge">Evento destacado</p>
            <h3 className="mt-3 text-xl font-bold">Actividades comunitarias</h3>
            <p className="mt-2 text-sm text-slate-600">
              Aquí irá el evento principal de la semana (fecha, sede y detalles).
              En fase 2 lo alimentamos desde un panel o BD.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/noticias" className="btn-primary">
                Ver detalles →
              </Link>
              <Link href="/contacto" className="btn-secondary">
                Preguntar en contacto
              </Link>
            </div>
          </div>

          {/* Accesos rápidos institucionales */}
          <div className="card">
            <p className="text-sm font-semibold text-slate-900">Accesos rápidos</p>
            <div className="mt-4 grid gap-2">
              {quickLinks.map((q) => (
                <Link
                  key={q.href}
                  href={q.href}
                  className="rounded-xl border bg-white px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {q.title}
                  <p className="mt-1 text-xs font-normal text-slate-500">{q.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

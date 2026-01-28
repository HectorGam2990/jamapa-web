import Link from "next/link";

const services = [
  { title: "Atención ciudadana", desc: "Orientación y canalización.", href: "/contacto" },
  { title: "Avisos y comunicados", desc: "Información oficial.", href: "/noticias" },
  { title: "Transparencia", desc: "Documentos y obligaciones.", href: "/transparencia" },
  { title: "Directorio", desc: "Áreas y responsables.", href: "/gobierno" },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="hero">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-xs uppercase tracking-widest text-white/80">
            Sitio oficial
          </p>
          <h1 className="mt-3">Ayuntamiento de Jamapa, Veracruz</h1>
          <p className="mt-4 max-w-2xl text-white/90">
            Gobierno municipal comprometido con el desarrollo, la transparencia
            y el bienestar de la ciudadanía.
          </p>

          <div className="mt-8 flex gap-3">
            <Link href="/contacto" className="btn-secondary">
              Contacto
            </Link>
            <Link href="/noticias" className="btn-primary">
              Noticias
            </Link>
          </div>

          {/* AVISO */}
          <div className="mt-10 rounded-2xl bg-[var(--jamapa-alert)] border-l-4 border-l-[var(--jamapa-gold)] p-5">
            <p className="font-semibold text-slate-900">Aviso importante</p>
            <p className="mt-1 text-sm text-slate-700">
              Espacio para comunicados urgentes del Ayuntamiento.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2>Servicios e información</h2>
        <p className="mt-2 text-slate-600">
          Accesos rápidos a información institucional.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="card border-l-4 border-l-[var(--jamapa-teal)]"
            >
              <p className="text-lg font-bold">{s.title}</p>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              <p className="mt-4 text-sm font-semibold text-[var(--jamapa-teal)]">
                Ver más →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ÚLTIMAS NOTICIAS */}
      <section className="bg-[var(--jamapa-soft)]">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex justify-between items-end">
            <div>
              <h2>Últimas noticias</h2>
              <p className="mt-2 text-slate-600">
                Comunicados y avisos recientes.
              </p>
            </div>
            <Link href="/noticias" className="btn-primary">
              Ver todas →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="card">
                <span className="badge">Comunicado</span>
                <h3 className="mt-3">Título de noticia</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Extracto breve de la noticia para lectura rápida.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";

const quickLinks = [
  {
    title: "Gobierno",
    text: "Cabildo, dependencias y directorio.",
    href: "/gobierno",
  },
  {
    title: "Municipio",
    text: "Historia, ubicación y comunidades.",
    href: "/municipio",
  },
  {
    title: "Noticias",
    text: "Avisos y comunicados oficiales.",
    href: "/noticias",
  },
  {
    title: "Transparencia",
    text: "Acceso a información pública.",
    href: "/transparencia",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO con foto */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0">
          <img
            src="/hero-jamapa.jpg"
            alt="Jamapa, Veracruz"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-20">
          <span className="badge bg-white/15 text-white ring-1 ring-white/20">
            SITIO OFICIAL
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
            Ayuntamiento de Jamapa, Veracruz
          </h1>

          <p className="mt-4 max-w-3xl text-white/85">
            Gobierno municipal comprometido con el desarrollo, la transparencia y el bienestar de la ciudadanía.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-primary">
              Contacto
            </Link>
            <Link href="/transparencia" className="btn-secondary">
              Transparencia
            </Link>
            <Link href="/noticias" className="btn-secondary">
              Ver noticias
            </Link>
          </div>

          {/* Tarjetas pro */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {/* Ubicación */}
            <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
              <p className="text-sm font-semibold text-white">Ubicación</p>
              <p className="mt-2 text-sm text-white/80">
                Ayuntamiento de Jamapa
              </p>
              <p className="mt-1 text-sm text-white/70">
                Cuartel 2, Jamapa, Veracruz
              </p>

              <div className="mt-4 flex gap-2">
                <a
                  className="btn-primary"
                  href="https://www.google.com/maps?q=Ayuntamiento%20de%20Jamapa%2C%20Cuartel%202%2C%20Jamapa%2C%20Veracruz"
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>

            {/* Horarios */}
            <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
              <p className="text-sm font-semibold text-white">Horarios</p>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li className="flex items-center justify-between">
                  <span>Lunes a Viernes</span>
                  <span className="font-semibold text-white">10:00 – 17:30</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Sábado</span>
                  <span className="font-semibold text-white">Cerrado</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Domingo</span>
                  <span className="font-semibold text-white">Cerrado</span>
                </li>
              </ul>
              <p className="mt-3 text-xs text-white/60">
                * Horarios sujetos a cambios por eventos oficiales.
              </p>
            </div>

            {/* Mapa embed */}
            <div className="rounded-2xl bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur">
              <div className="overflow-hidden rounded-xl">
                <iframe
                  title="Mapa Ayuntamiento de Jamapa"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Ayuntamiento%20de%20Jamapa%2C%20Cuartel%202%2C%20Jamapa%2C%20Veracruz&output=embed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="bg-slate-50 py-12">
        <div className="container-page">
          <h2 className="section-title">Información institucional</h2>
          <p className="section-subtitle">
            Accesos directos a las principales áreas del municipio.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="card">
                <p className="card-title">{item.title}</p>
                <p className="card-text">{item.text}</p>
                <p className="mt-4 text-sm font-semibold text-slate-900">
                  Ver información oficial →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Banda de avisos (toque pro con color) */}
      <section className="py-10">
        <div className="container-page">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm font-extrabold text-amber-900">
              Avisos oficiales
            </p>
            <p className="mt-2 text-sm text-amber-900/80">
              Consulta comunicados y noticias recientes del Ayuntamiento.
            </p>
            <div className="mt-4">
              <Link href="/noticias" className="btn-dark">
                Ir a Noticias
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

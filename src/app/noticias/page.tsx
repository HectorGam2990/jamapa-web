import Link from "next/link";

type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string; // ISO o texto
  category: "Comunicado" | "Aviso" | "Evento";
};

const news: NewsItem[] = [
  {
    id: "comunicado-001",
    title: "Comunicado oficial: Jornadas de atención ciudadana",
    excerpt:
      "Se informa a la ciudadanía sobre las fechas y sedes de las jornadas de atención.",
    date: "2026-01-27",
    category: "Comunicado",
  },
  {
    id: "aviso-001",
    title: "Aviso: Actualización de horarios de servicios",
    excerpt:
      "Consulta los horarios actualizados para la atención en oficinas municipales.",
    date: "2026-01-25",
    category: "Aviso",
  },
  {
    id: "evento-001",
    title: "Evento: Actividades comunitarias del fin de semana",
    excerpt:
      "Agenda de actividades para familias, cultura y deporte en el municipio.",
    date: "2026-01-20",
    category: "Evento",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-semibold text-slate-700">
      {children}
    </span>
  );
}

export default function NoticiasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Noticias</h1>
          <p className="mt-2 text-slate-600">
            Comunicados, avisos y eventos del Ayuntamiento. (Fase 1: estático, listo para volverse dinámico)
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge>Comunicados</Badge>
          <Badge>Avisos</Badge>
          <Badge>Eventos</Badge>
        </div>
      </div>

      {/* Lista */}
      <div className="mt-8 grid gap-4">
        {news.map((n) => (
          <article
            key={n.id}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  {n.category}
                </span>
                <span className="text-xs text-slate-500">{n.date}</span>
              </div>

              {/* Simulamos “leer más” (luego será /noticias/[slug]) */}
              <Link
                href="#"
                className="text-sm font-semibold text-[var(--jamapa-teal)] hover:underline"
              >
                Leer más →
              </Link>
            </div>

            <h2 className="mt-3 text-xl font-bold text-slate-900">{n.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{n.excerpt}</p>
          </article>
        ))}
      </div>

      {/* Caja “lista para dinámica” */}
      <div className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Siguiente paso (cuando tú digas):</p>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
          <li>Convertir noticias a rutas dinámicas <code className="rounded bg-slate-100 px-2 py-0.5">/noticias/[slug]</code></li>
          <li>Conectar a un CMS (Sanity/Strapi) o a una BD</li>
          <li>Panel de administración (Fase 2+)</li>
        </ul>
      </div>
    </div>
  );
}

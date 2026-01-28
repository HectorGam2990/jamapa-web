import Link from "next/link";
import { getAllNews } from "@/lib/news";

function CategoryBadge({ cat }: { cat: string }) {
  const base = "badge";
  if (cat === "Aviso")
    return <span className={`${base} border-[var(--jamapa-gold)]`}>{cat}</span>;
  if (cat === "Evento")
    return <span className={`${base} border-[var(--jamapa-teal)]`}>{cat}</span>;
  return <span className={base}>{cat}</span>;
}

export default function NoticiasPage() {
  const items = getAllNews();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold">Noticias</h1>
          <p className="mt-2 text-slate-600">
            Comunicados, avisos y eventos del Ayuntamiento. (Fase 1: contenido estático, estructura dinámica)
          </p>
        </div>

        <Link href="/" className="btn-secondary w-fit">
          ← Volver al inicio
        </Link>
      </div>

      <div className="mt-8 grid gap-4">
        {items.map((n) => (
          <article
            key={n.slug}
            className="card border-l-4 border-l-[var(--jamapa-teal)]"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <CategoryBadge cat={n.category} />
                <span className="text-xs text-slate-500">{n.date}</span>
              </div>

              <Link
                href={`/noticias/${n.slug}`}
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

      <div className="mt-10 rounded-2xl border bg-white p-6">
        <p className="text-sm font-semibold text-slate-900">
          Siguiente paso (cuando tú digas):
        </p>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
          <li>Conectar estas noticias a una BD o CMS (Sanity/Strapi)</li>
          <li>Panel de administración para publicar (Fase 2)</li>
          <li>Filtros por categoría y buscador</li>
        </ul>
      </div>
    </div>
  );
}

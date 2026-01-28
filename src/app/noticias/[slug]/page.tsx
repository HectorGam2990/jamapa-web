import Link from "next/link";
import { getNewsBySlug, getAllNews } from "@/lib/news";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllNews().map((n) => ({ slug: n.slug }));
}

export default async function NoticiaDetallePage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Next 16 (Turbopack) a veces entrega params como Promise
  const resolvedParams = await Promise.resolve(params);
  const item = getNewsBySlug(resolvedParams.slug);

  if (!item) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge">{item.category}</span>
          <span className="text-xs text-slate-500">{item.date}</span>
        </div>

        <Link href="/noticias" className="btn-secondary w-fit">
          ← Volver a noticias
        </Link>
      </div>

      <h1 className="mt-5 text-3xl font-extrabold text-slate-900 md:text-4xl">
        {item.title}
      </h1>

      <p className="mt-3 max-w-3xl text-slate-600">{item.excerpt}</p>

      <div className="divider" />

      <div className="grid gap-4">
        {item.content.map((p, idx) => (
          <p key={idx} className="leading-relaxed text-slate-700">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border bg-[var(--jamapa-soft)] p-6">
        <p className="text-sm font-semibold text-slate-900">Nota</p>
        <p className="mt-1 text-sm text-slate-700">
          Esta página ya está lista para conectar un CMS/BD en fases futuras.
        </p>
      </div>
    </div>
  );
}

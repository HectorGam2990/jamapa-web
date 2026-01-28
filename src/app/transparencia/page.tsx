export default function TransparenciaPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">Transparencia</h1>
      <p className="mt-3 text-slate-600">
        Acceso a información pública y obligaciones de transparencia.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {["Obligaciones", "Presupuesto", "Contrataciones", "Normatividad"].map((x) => (
          <div key={x} className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-lg font-bold">{x}</p>
            <p className="mt-2 text-sm text-slate-600">Sección informativa (Fase 1).</p>
          </div>
        ))}
      </div>
    </div>
  );
}

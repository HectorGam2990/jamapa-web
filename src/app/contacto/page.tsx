export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">Contacto</h1>
      <p className="mt-3 text-slate-600">
        Datos oficiales de atención ciudadana (horarios, teléfono, correo, dirección).
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          { t: "Horario", d: "Por definir (oficial)" },
          { t: "Teléfono", d: "Por definir (oficial)" },
          { t: "Correo", d: "Por definir (oficial)" },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-slate-500">{c.t}</p>
            <p className="mt-2 text-base font-bold">{c.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold text-slate-500">Dirección</p>
        <p className="mt-2 text-base font-bold">Por definir (oficial)</p>
        <p className="mt-2 text-sm text-slate-600">
          Luego metemos mapa (Google Maps) y formulario en Fase 2/3.
        </p>
      </div>
    </div>
  );
}

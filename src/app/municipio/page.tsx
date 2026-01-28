export default function MunicipioPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold">Municipio</h1>
      <p className="mt-3 text-slate-600">
        Historia, ubicación, comunidades y datos generales.
      </p>

      <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <p className="font-semibold">Próximo:</p>
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
          <li>Reseña histórica</li>
          <li>Mapa y ubicación</li>
          <li>Comisarías / comunidades</li>
          <li>Turismo y cultura</li>
        </ul>
      </div>
    </div>
  );
}

export default function TransparenciaPage() {
  return (
    <div className="container-page py-12">
      <h1 className="section-title">Transparencia</h1>
      <p className="section-subtitle">
        Acceso a la información pública del Ayuntamiento de Jamapa.
      </p>

      <div className="mt-10 space-y-6">
        <section className="card">
          <h2 className="card-title">Compromiso con la transparencia</h2>
          <p className="card-text">
            El Ayuntamiento de Jamapa refrenda su compromiso con la rendición de
            cuentas y el acceso a la información pública conforme a la ley.
          </p>
        </section>

        <section className="card">
          <h2 className="card-title">Información disponible</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
            <li>Marco normativo (próximamente)</li>
            <li>Presupuesto y ejercicio del gasto</li>
            <li>Directorios</li>
            <li>Informes</li>
          </ul>
        </section>

        <section className="card">
          <h2 className="card-title">Nota</h2>
          <p className="card-text">
            Esta sección se encuentra en proceso de actualización para cumplir
            con las obligaciones de transparencia.
          </p>
        </section>
      </div>
    </div>
  );
}

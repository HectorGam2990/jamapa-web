export default function MunicipioPage() {
  return (
    <div className="container-page py-12">
      <h1 className="section-title">Municipio de Jamapa</h1>
      <p className="section-subtitle">
        Información general sobre el municipio de Jamapa, Veracruz.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="card">
          <h2 className="card-title">Historia</h2>
          <p className="card-text">
            Jamapa es un municipio del estado de Veracruz con una rica historia
            y tradiciones arraigadas. Su desarrollo ha estado ligado a la vida
            comunitaria, agrícola y cultural de la región.
          </p>
        </section>

        <section className="card">
          <h2 className="card-title">Ubicación</h2>
          <p className="card-text">
            El municipio de Jamapa se localiza en la zona centro del estado de
            Veracruz, formando parte de la región del Sotavento.
          </p>
        </section>

        <section className="card">
          <h2 className="card-title">Comunidades</h2>
          <p className="card-text">
            Jamapa cuenta con diversas comunidades y localidades que conforman
            su territorio municipal.
          </p>
        </section>

        <section className="card">
          <h2 className="card-title">Datos generales</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
            <li>Estado: Veracruz</li>
            <li>Región: Sotavento</li>
            <li>Cabecera municipal: Jamapa</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

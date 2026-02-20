type GovernmentProfile = {
  area: string;
  titular: string;
  cargo: string;
  resumen: string;
  correo: string;
  telefono?: string;
  horario: string;
  iniciales: string;
  funciones: string[];
};

const governmentProfiles: GovernmentProfile[] = [
  {
    area: "Direccion de Obras Publicas",
    titular: "Carlos Andrade Lara",
    cargo: "Director de Obras Publicas",
    resumen:
      "Ingeniero mecanico electricista, egresado del ITESM CCM, con experiencia en obra publica y gestion municipal. Actualmente cursa una maestria en construccion y enfoca su labor en obras funcionales, seguras y de alto impacto social.",
    correo: "obraspublicas@jamapa.gob.mx",
    horario: "Lunes a viernes, de 9:00 a 15:00 horas",
    iniciales: "CA",
    funciones: [
      "Planeacion y supervision de obra publica municipal",
      "Atencion tecnica de proyectos de infraestructura",
      "Coordinacion de acciones para mejora urbana",
    ],
  },
  {
    area: "Jefatura de Comercio",
    titular: "Luis Fernando Hernandez Rios",
    cargo: "Jefe de Comercio",
    resumen:
      "Licenciado en Psicologia, egresado de la Universidad Veracruzana, con especializacion en el area organizacional. Cuenta con trayectoria en coordinacion y atencion operativa de actividades comerciales del municipio.",
    correo: "comercio@jamapa.gob.mx",
    telefono: "2294662691",
    horario: "Lunes a viernes, de 9:00 a 15:00 horas",
    iniciales: "LH",
    funciones: [
      "Ordenamiento y seguimiento de actividad comercial",
      "Atencion de tramites vinculados al area de comercio",
      "Vinculacion operativa con comercios del municipio",
    ],
  },
];

export default function GobiernoPage() {
  return (
    <div className="bg-slate-50">
      <section className="relative overflow-hidden bg-[#5b0f2e] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_44%)]" />
        <div className="absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
        <div className="container-page relative py-12 md:py-16">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide">
            AREA DE GOBIERNO
          </p>
          <h1 className="mt-4 text-3xl font-extrabold md:text-4xl">
            Estructura administrativa municipal
          </h1>
          <p className="mt-4 max-w-3xl text-sm text-white/85 md:text-base">
            Informacion institucional de las areas de gobierno del Ayuntamiento
            de Jamapa, Veracruz. Este directorio facilita el acceso ciudadano a
            titulares de area, correos de atencion y horarios oficiales.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-white/70">
                Dependencias activas
              </p>
              <p className="mt-1 text-2xl font-extrabold">
                {governmentProfiles.length}
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-white/70">
                Correo institucional
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Todos los perfiles con correo oficial
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-white/70">
                Horario de atencion
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Lunes a viernes, 9:00 a 15:00
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-12">
        <div>
          <h2 className="section-title">Directorio por area</h2>
          <p className="section-subtitle">
            Titulares de dependencia y medios de contacto para atencion
            institucional.
          </p>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
          <div className="grid gap-6 lg:grid-cols-2">
            {governmentProfiles.map((profile) => (
              <article
                key={profile.correo}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="bg-gradient-to-r from-slate-100 to-slate-50 p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5b0f2e] text-lg font-extrabold text-white">
                      {profile.iniciales}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {profile.area}
                      </p>
                      <h3 className="text-xl font-extrabold text-slate-900">
                        {profile.titular}
                      </h3>
                      <p className="text-sm font-semibold text-slate-700">
                        {profile.cargo}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-6 text-slate-700">
                    {profile.resumen}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                      Funciones principales
                    </p>
                    <ul className="mt-2 space-y-2 text-sm text-slate-700">
                      {profile.funciones.map((funcion) => (
                        <li key={funcion} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#5b0f2e]" />
                          <span>{funcion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <dl className="mt-5 space-y-3 text-sm">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <dt className="font-semibold text-slate-900">Correo</dt>
                      <dd className="mt-1">
                        <a
                          className="text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-slate-900"
                          href={`mailto:${profile.correo}`}
                        >
                          {profile.correo}
                        </a>
                      </dd>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <dt className="font-semibold text-slate-900">Telefono</dt>
                      <dd className="mt-1 text-slate-700">
                        {profile.telefono ?? "No disponible"}
                      </dd>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                      <dt className="font-semibold text-slate-900">Horario</dt>
                      <dd className="mt-1 text-slate-700">{profile.horario}</dd>
                    </div>
                  </dl>

                  <div className="mt-5">
                    <a
                      href={`mailto:${profile.correo}`}
                      className="inline-flex items-center justify-center rounded-xl bg-[#5b0f2e] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#4b0d26]"
                    >
                      Contactar area
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm xl:sticky xl:top-24">
            <h3 className="text-lg font-extrabold text-slate-900">
              Informacion institucional
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              La informacion publicada corresponde a titulares de area y
              canales oficiales de atencion.
            </p>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                Horario general
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900">
                Lunes a viernes
              </p>
              <p className="text-sm text-slate-700">9:00 a 15:00 horas</p>
            </div>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-amber-800">
                Recomendacion
              </p>
              <p className="mt-1 text-sm text-amber-900/90">
                Para agilizar la atencion, realiza el primer contacto por correo
                institucional.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-page pb-14">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-extrabold text-amber-900">
            Atencion ciudadana
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-amber-900/90">
            Para facilitar tramites y solicitudes, se recomienda contactar
            primero por correo institucional y posteriormente acudir en horario
            oficial a las oficinas del Ayuntamiento.
          </p>
        </div>
      </section>
    </div>
  );
}

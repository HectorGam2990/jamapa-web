export default function ContactoPage() {
  return (
    <div className="container-page py-12">
      <h1 className="section-title">Contacto</h1>
      <p className="section-subtitle">
        Información de contacto y atención ciudadana.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="card">
          <h2 className="card-title">Datos de contacto</h2>

          <p className="card-text">
            <strong>Dirección:</strong><br />
            Cuartel 2, Jamapa, Veracruz
          </p>

          <p className="card-text mt-4">
            <strong>Horario de atención:</strong><br />
            Lunes a Viernes de 10:00 a 17:30 hrs
          </p>

          <p className="card-text mt-4">
            <strong>Teléfono:</strong><br />
            Próximamente
          </p>

          <p className="card-text mt-4">
            <strong>Correo electrónico:</strong><br />
            contacto@jamapa.gob.mx (pendiente de confirmar)
          </p>
        </section>

        <section className="card">
          <h2 className="card-title">Ubicación</h2>
          <iframe
            title="Mapa Ayuntamiento de Jamapa"
            className="mt-4 h-64 w-full rounded-xl border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Ayuntamiento%20de%20Jamapa%2C%20Cuartel%202%2C%20Jamapa%2C%20Veracruz&output=embed"
          />
        </section>
      </div>
    </div>
  );
}

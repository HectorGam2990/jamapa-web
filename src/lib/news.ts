export type NewsCategory = "Comunicado" | "Aviso" | "Evento";

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // "YYYY-MM-DD"
  category: NewsCategory;
  content: string[]; // párrafos
};

export const news: NewsItem[] = [
  {
    slug: "jornadas-atencion-ciudadana",
    title: "Jornadas de atención ciudadana",
    excerpt:
      "Se informa a la ciudadanía sobre fechas, sedes y dinámica de atención para canalizar solicitudes.",
    date: "2026-01-27",
    category: "Comunicado",
    content: [
      "El H. Ayuntamiento de Jamapa informa a la ciudadanía sobre la realización de jornadas de atención ciudadana para recibir reportes y solicitudes.",
      "Las sedes y horarios serán publicados en los canales oficiales. Se recomienda acudir con identificación y, cuando aplique, con la documentación correspondiente.",
      "Agradecemos su participación y colaboración para fortalecer la atención y los servicios municipales.",
    ],
  },
  {
    slug: "actualizacion-horarios-servicios",
    title: "Actualización de horarios de servicios",
    excerpt:
      "Consulta los horarios actualizados para la atención en oficinas municipales y áreas de servicio.",
    date: "2026-01-25",
    category: "Aviso",
    content: [
      "Se informa a la ciudadanía que los horarios de atención en oficinas municipales han sido actualizados.",
      "Para evitar contratiempos, consulta los horarios antes de acudir. En caso de dudas, visita la sección de Contacto para los medios oficiales de atención.",
      "Seguimos trabajando para brindar un servicio eficiente y accesible.",
    ],
  },
  {
    slug: "actividades-comunitarias-fin-semana",
    title: "Actividades comunitarias del fin de semana",
    excerpt:
      "Agenda de actividades culturales y deportivas para familias y comunidad en el municipio.",
    date: "2026-01-20",
    category: "Evento",
    content: [
      "Invitamos a la ciudadanía a participar en las actividades comunitarias del fin de semana: deporte, cultura y convivencia.",
      "Las actividades están sujetas a cambios por logística y condiciones climatológicas.",
      "Consulta los avisos oficiales para confirmar sede y horario.",
    ],
  },
];

// Helpers
export function getNewsBySlug(slug: string) {
  return news.find((n) => n.slug === slug);
}

export function getAllNews() {
  // Orden más reciente primero
  return [...news].sort((a, b) => (a.date < b.date ? 1 : -1));
}

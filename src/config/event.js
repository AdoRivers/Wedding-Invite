/**
 * Configuración central del evento.
 * Toda la app consume estos valores; modificar aquí para personalizar la invitación.
 */

export const event = {
  honoree: {
    name: "Karen",
    age: 1,
    portrait: "/images/Cover.jpeg",
  },

  title: "Karen's Birthday",
  subtitle: "Está cumpliendo años",

  // Fecha real del evento (ISO local). Alimenta el countdown.
  date: "2026-05-22T18:00:00",
  dateLabel: { day: "22", month: "Mayo", short: "MAYO 22" },
  timeLabel: "06:00 PM",

  // Tarjetas de información: temática + dresscode
  info: [
    {
      key: "dresscode",
      label: "Dresscode",
      title: "Anotha perro asustado",
      description: "Alex no muestres esto, es una prueba.",
      image: "/images/perro-asustado-perro.gif",
      icon: "hanger",
    },
  ],

  // Galería
  gallery: [
    { src: "/images/Karen1.jpeg", alt: "Karen 1" },
    { src: "/images/Karen2.jpeg", alt: "Karen 2" },
    { src: "/images/Karen3.jpeg", alt: "Karen 3" },
  ],

  // Highlight — atracción especial del evento (con imagen)
  highlight: {
    eyebrow: "Presentación estelar",
    title: "Grupo Advertencia",
    description:
      "Grupo Norteño, originario de Escobedo Nuevo León, México.",
    // Placeholder hasta que subas la foto del grupo:
    // reemplaza por "/images/grupo-advertencia.jpg" cuando la tengas.
    image: "/images/Karen2.jpeg",
    imageAlt: "Grupo Advertencia en concierto",
  },

  location: {
    name: "Salón de eventos",
    address: "PRPQ+JWC Cdad. Apodaca, Nuevo León",
    mapsQuery: "PRPQ+JWC Cdad. Apodaca, Nuevo León",
  },

  rsvp: {
    url: "mailto:rsvp@example.com?subject=RSVP%20Karen%27s%20Birthday",
    label: "Confirmar Asistencia",
  },

  footer: "Karen is one",
};
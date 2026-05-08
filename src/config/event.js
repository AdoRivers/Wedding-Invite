/**
 * Configuración central del evento.
 * Toda la app consume estos valores; modificar aquí para personalizar la invitación.
 */

export const event = {
  honoree: {
    name: "Karen",
    age: 1,
    portrait: "/images/KarCover.webp",
  },

  // ── Hero ─────────────────────────────────────────────────────────────
  // eyebrow: línea pequeña sobre el título principal
  // title:   texto del h1 — se convierte a MAYÚSCULAS y se anima letra a letra
  hero: {
    eyebrow: "It's my",
    title: "Birthday",
  },

  // Fecha real del evento (ISO local). Alimenta el countdown.
  date: "2026-05-22T20:00:00",
  dateLabel: { day: "22", month: "Mayo", short: "MAYO 22" },
  timeLabel: "08:00 PM",

  // Tarjetas de información: temática + dresscode
  info: [
    {
      key: "dresscode",
      label: "Dresscode",
      title: "Black & White",
      description: "lorem",
      image: "/images/Dresscode.jpeg",
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
    image: "/images/Karen2.jpeg",
    imageAlt: "Grupo Advertencia en concierto",
  },

  location: {
    name: "Huisache 331",
    address: "Huisache 331, Rincón de Huinala, 66644 Cdad. Apodaca, N.L.",
    mapsQuery: "Huisache 331, Rincón de Huinala, 66644 Cdad. Apodaca, N.L.",
  },

  rsvp: {
    url: "mailto:rsvp@example.com?subject=RSVP%20Karen%27s%20Birthday",
    label: "Guardar en Calendario",
  },

  footer: "Short",
};
/**
 * Configuración central del evento.
 * Toda la app consume estos valores; modificar aquí para personalizar la invitación.
 */

export const event = {
  honoree: {
    name: "Karen",
    age: 1,
    portrait: "/images/BodaDeOro.svg",
  },

  // ── Hero ─────────────────────────────────────────────────────────────
  // eyebrow: línea pequeña sobre el título principal
  // title:   texto del h1 — se convierte a MAYÚSCULAS y se anima letra a letra
  hero: {
    eyebrow: "Nuestra",
    title: "Boda de Oro",
  },

  // Fecha real del evento (ISO local). Alimenta el countdown.
  date: "2026-07-05T11:00:00",
  dateLabel: { day: "5", month: "Julio", short: "Julio 5" },
  timeLabel: "11:00 AM",

  // Tarjetas de información: temática + dresscode
  info: [
    {
      key: "dresscode",
      label: "Dresscode",
      title: "Semiformal",
      description: "Para todos",
      image: "/images/Dresscode.jpg",
      icon: "hanger",
    },
  ],

  // Galería
  gallery: [
    { src: "/images/Wed1.jpeg", alt: "Boda 1" },
    { src: "/images/Wed2.jpeg", alt: "Boda 2" },
    { src: "/images/Wed3.jpeg", alt: "Boda 3" },
    { src: "/images/Wed4.jpeg", alt: "Boda 4" },
    { src: "/images/Gal5.jpeg", alt: "Boda 5" }
  ],

  // Highlight — atracción especial del evento (con imagen)
 /* highlight: {
    eyebrow: "Presentación estelar",
    title: "Grupo Advertencia",
    description:
      "Grupo Norteño, originario de Escobedo Nuevo León, México.",
    image: "/images/Grupo.jpeg",
    imageAlt: "Grupo Advertencia en concierto",
  },*/

  locations: {
    church: {
      label: "Ceremonia",
      name: "Parroquia de San Juan Bautista",
      address: "Calle de la Iglesia, Guadalupe, N.L.",
      mapsQuery: "Parroquia de San Juan Bautista, Guadalupe, N.L.",
    },
    venue: {
      label: "Recepción",
      name: "Centro Social Quintero",
      address: "Durango 118, Orizaba, 67167 Guadalupe, N.L.",
      mapsQuery: "Durango 118, Orizaba, 67167 Guadalupe, N.L.",
    },
  },

  rsvp: {
    label: "Guardar en Calendario",
  },

  registry: {
    title: "Registry",
    description: "Wishlist para la fiesta.",
    url: "#",
  },
  
  calendar:{
    title: "Boda",
    subtitle: "De Oro"
  },

  footer: "Grupo DALFA"
};
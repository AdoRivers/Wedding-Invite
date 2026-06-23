/**
 * Configuración central del evento.
 * Toda la app consume estos valores; modificar aquí para personalizar la invitación.
 */

export const event = {
 

  // ── Hero ─────────────────────────────────────────────────────────────
  hero: {
    eyebrow: "Nuestra",
    title: "Boda de Oro",
  },

  // ── Pareja ───────────────────────────────────────────────────────────
  couple: {
    partner1: "",        // Actualiza con el nombre del novio
    partner2: "",
    story: "Cincuenta años de amor, de complicidad y de vida compartida. Los invitamos a celebrar con nosotros este regalo tan grande.",
    portrait: "/images/BodaDeOro.svg",
  },

  // Fecha real del evento (ISO local). Alimenta el countdown.
  date: "2026-07-05T12:00:00",
  dateLabel: { day: "5", month: "Julio", short: "Julio 5" },
  timeLabel: "12:00 PM",

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
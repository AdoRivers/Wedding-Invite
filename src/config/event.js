/**
 * Configuración central del evento.
 * Toda la app consume estos valores; modificar aquí para personalizar la invitación.
 */

export const event = {
  honoree: {
    name: "Chloe",
    age: 1,
    portrait: "/images/Cover.jpeg",
  },

  title: "Karen's Birthday",
  subtitle: "Está cumpliendo años!!!",

  // Fecha real del evento (ISO local). Alimenta el countdown.
  date: "2026-05-22T10:00:00",
  dateLabel: { day: "22", month: "Mayo", short: "MAYO 22" },
  timeLabel: "06:00 PM",

  // Tarjetas de información: temática + dresscode
  info: [
    {
      key: "tematica",
      label: "Temática",
      title: "Perro asustado",
      description: "Un perro asustado hermano, ve lo por tu bien.",
      image: "/images/scared_dog.webp",
      icon: "sparkles",
    },
    {
      key: "dresscode",
      label: "Dresscode",
      title: "Anotha perro asustado",
      description: "Alex no muestres esto, es una prueba.",
      image: "/images/perro-asustado-perro.gif",
      icon: "hanger",
    },
  ],

  // Galería: imágenes que entran con fade + stagger en scroll
  gallery: [
    { src: "/images/Karen1.jpeg", alt: "Karen 1" },
    { src: "/images/Karen2.jpeg", alt: "Karen 2" },
    { src: "/images/Karen3.jpeg", alt: "Karen 3" },
    //{ src: "/images/gallery-4.webp", alt: "Chloe Photo 4" },
  ],

  // Highlight verde — atracción especial del evento
  highlight: {
    eyebrow: "Presentación estelar",
    title: "Grupo Advertencia",
    description: "Grupo Norteño, Originario de Escobedo Nuevo León México.",
  },

  location: {
    name: "lorem ipsum",
    address: "PRPQ+JWC Cdad. Apodaca, Nuevo León",
    mapsQuery: "PRPQ+JWC Cdad. Apodaca, Nuevo León",
  },

  rsvp: {
    url: "mailto:rsvp@example.com?subject=RSVP%20Chloe%27s%20Birthday",
    label: "Confirmar Asistencia",
  },

  footer: "No sé que poner aqui",
};
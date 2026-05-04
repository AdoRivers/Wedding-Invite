/**
 * Configuración central del evento.
 * Toda la app consume estos valores; modificar aquí para personalizar la invitación.
 */

export const event = {
    honoree: {
      name: "X",
      age: 1,
      photo: "/images/honoree.webp", 
    },
    title: "Celebra a X",
    subtitle: "Va a cumplir un año",
    message: "Estás invitado a festejar mi cumpleaños",
  
    date: "2026-05-22T10:00:00",
    dateLabel: { day: "22", month: "MAYO" },
    timeLabel: { hours: "10:00", suffix: "AM" },
  
    location: {
      name: "Garden Terrace",
      address: "123 Celebration Lane, Springside",
      mapsQuery: "Garden Terrace, 123 Celebration Lane, Springside",
    },
  
    rsvp: {
      url: "mailto:rsvp@example.com?subject=RSVP%20Chloe%27s%20Birthday",
      label: "RSVP Now",
    },
  
    registry: {
      title: "Registry",
      description: "Wishlist para la fiesta.",
      url: "#",
    },
  
    footer: "Todos los invitados son bienvenidos",
  };
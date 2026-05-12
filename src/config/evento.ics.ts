import type { APIRoute } from "astro";
import { event } from "../config/event.js";

const fmt = (iso: string) => iso.replace(/[-:]/g, "").slice(0, 15);

const start = event.date;
const endDate = new Date(start);
endDate.setHours(endDate.getHours() + 3);
const end = endDate.toISOString().slice(0, 19);

const uid  = `karen-birthday-2026@birthday-invite`;
const now  = new Date().toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";
const summary = `${event.hero.eyebrow} ${event.hero.title}`.trim();
const desc = `¡Celebra con nosotros el cumpleaños de ${event.honoree.name}!`;

const ics = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Birthday Invite//EN",
  "CALSCALE:GREGORIAN",
  "METHOD:PUBLISH",
  "BEGIN:VEVENT",
  `UID:${uid}`,
  `DTSTAMP:${now}`,
  `DTSTART;TZID=America/Monterrey:${fmt(start)}`,
  `DTEND;TZID=America/Monterrey:${fmt(end)}`,
  `SUMMARY:${summary}`,
  `DESCRIPTION:${desc}`,
  `LOCATION:${event.location.address}`,
  "BEGIN:VALARM",
  "TRIGGER:-PT60M",
  "ACTION:DISPLAY",
  "DESCRIPTION:Recordatorio — ¡Hoy es la fiesta!",
  "END:VALARM",
  "END:VEVENT",
  "END:VCALENDAR",
].join("\r\n");

export const GET: APIRoute = () =>
  new Response(ics, {
    headers: {
      "Content-Type": "text/calendar;charset=utf-8",
      "Content-Disposition": 'attachment; filename="karen-birthday.ics"',
      "Cache-Control": "public, max-age=3600",
    },
  });

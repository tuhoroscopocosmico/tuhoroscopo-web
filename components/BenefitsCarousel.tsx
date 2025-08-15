"use client";
import { useState } from "react";
import BenefitCard from "./BenefitCard";

const items = [
  {
    title: "Número y color de la suerte",
    desc: "Recibí tu número y color clave para hoy, con una guía breve para canalizar la mejor energía.",
    footer: "Lun → Sáb",
    icon: <span className="text-2xl">🔮</span>,
  },
  {
    title: "Frase inspiradora",
    desc: "Un impulso breve y poderoso para arrancar el día con claridad y foco.",
    footer: "Lun → Sáb",
    icon: <span className="text-2xl">✨</span>,
  },
  {
    title: "Meditación",
    desc: "Pequeña práctica de respiración/atención plena para bajar la ansiedad y recargar energía.",
    footer: "Lun → Sáb",
    icon: <span className="text-2xl">🧘‍♀️</span>,
  },
  {
    title: "Mensaje premium",
    desc: "Contenido único, sin spam ni apps. Entregado directo en tu WhatsApp.",
    footer: "Siempre",
    icon: <span className="text-2xl">📲</span>,
  },
];

export default function BenefitsCarousel() {
  const [i, setI] = useState(0);

  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const next = () => setI((p) => (p + 1) % items.length);

  return (
    <div className="relative mt-6">
      <div className="flex items-center justify-between mb-3">
        <p className="mx-auto rounded-full bg-gradient-to-r from-amber-400/30 to-pink-400/30 px-4 py-2 text-center text-sm ring-1 ring-white/10 shadow-inner">
          🚀 Obtené tu mensaje diario con estos beneficios:
        </p>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="rounded-full bg-white/10 p-2 hover:bg-white/20 ring-1 ring-white/15"
          aria-label="Anterior"
        >
          ←
        </button>

        <div className="flex w-full max-w-5xl snap-x snap-mandatory overflow-hidden px-2">
          {/* visible: item actual + vecinos (simple) */}
          <div className="mx-auto flex gap-5">
            <BenefitCard {...items[(i - 1 + items.length) % items.length]} />
            <BenefitCard {...items[i]} />
            <BenefitCard {...items[(i + 1) % items.length]} />
          </div>
        </div>

        <button
          onClick={next}
          className="rounded-full bg-white/10 p-2 hover:bg-white/20 ring-1 ring-white/15"
          aria-label="Siguiente"
        >
          →
        </button>
      </div>
    </div>
  );
}

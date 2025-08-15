import Head from "next/head";
import Logo from "../components/logo";
import BenefitsCarousel from "../components/BenefitsCarousel";
import LeadForm from "../components/LeadForm";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tu Horóscopo Cósmico — Mensajes premium diarios en WhatsApp</title>
        <meta
          name="description"
          content="Recibí cada mañana tu horóscopo, número y color de la suerte, frase inspiradora y una breve meditación — directo a tu WhatsApp. Sin apps. Sin spam."
        />
        <meta property="og:title" content="Tu Horóscopo Cósmico" />
        <meta property="og:description" content="Mensajes premium diarios en tu WhatsApp." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/logo/logo_ppal.png" />
      </Head>

      {/* overlay global para legibilidad sobre el fondo */}
      <div className="body-overlay min-h-screen relative">
        <main className="relative z-[1]">
          {/* HERO */}
          <section className="mx-auto max-w-5xl px-4 pt-16 text-center">
            <Logo />

            <h2 className="mt-8 text-2xl md:text-4xl font-extrabold leading-snug">
              <span className="inline-block align-middle">🌟</span>{" "}
              Comenzá cada día recibiendo tu mensaje personalizado con la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-pink-300">
                mejor energía del universo
              </span>
            </h2>

            <p className="mt-4 text-white/85">
              Astrología moderna, práctica y hecha para vos. Sin apps. Sin vueltas. Lista para{" "}
              <strong>Uruguay</strong>.
            </p>
            <p className="text-white/70">
              Sólo mensajes premium, únicos, directo a tu WhatsApp para arrancar tu día con claridad y buena energía.
            </p>

            <BenefitsCarousel />

            <div className="mt-10">
              <a href="#form"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-400 to-pink-400 px-7 py-3 font-semibold text-violet-900 shadow-lg hover:from-amber-300 hover:to-pink-300">
                Comenzar mi experiencia
              </a>
            </div>
          </section>

          {/* FORM */}
          <section className="mx-auto max-w-6xl px-4 pb-16">
            <LeadForm />
          </section>

          {/* FOOTER simple */}
          <footer className="border-t border-white/10 bg-violet-900/30">
            <div className="mx-auto max-w-5xl px-4 py-10 text-center text-sm text-white/80 space-y-3">
              <div className="space-x-5">
                <a href="/quienes-somos" className="hover:text-pink-300">¿Quiénes somos?</a>
                <a href="/faq" className="hover:text-pink-300">Preguntas frecuentes</a>
                <a href="/politica" className="hover:text-pink-300">Política de privacidad</a>
                <a href="/contacto" className="hover:text-pink-300">Contacto</a>
              </div>
              <p className="text-white/60">© {new Date().getFullYear()} Tu Horóscopo Cósmico. Todos los derechos reservados.</p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}

// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const el = swiperRef.current?.el as HTMLElement | undefined;
    if (!el) return;
    const enter = () => swiperRef.current?.autoplay?.stop?.();
    const leave = () => swiperRef.current?.autoplay?.start?.();
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Tu Horóscopo Cósmico – Mensajes premium por WhatsApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/img/iconos/faviconn.png" />
      </Head>

      <main
      style={{
        fontFamily: 'Montserrat, system-ui, sans-serif',
        minHeight: '100vh',
        // fondo: imagen + overlay en una sola capa
        background:
          'radial-gradient(1200px 600px at 50% -10%, rgba(18,12,34,.65), rgba(18,12,34,.95)), url("/img/fondo/fondo_ligth.webp")',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        color: '#fff',
      }}
>

        {/* Logo */}
        <div style={{ width: 160, margin: '24px auto 8px', perspective: '800px' }}>
          <Image
            src="/img/logo/logo-ppal-01-ligth.png"
            alt="Tu Horóscopo Cósmico"
            width={320}
            height={180}
            priority
            style={{ width: '100%', height: 'auto', borderRadius: 18 }}
          />
        </div>

        {/* HERO */}
        <section style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', padding: '0 16px' }}>
          <h1
            style={{
              color: '#FFCE4D',
              fontWeight: 800,
              fontSize: '1.65rem',
              lineHeight: 1.25,
              letterSpacing: '.3px',
              margin: '10px 0',
            }}
          >
            Arrancá cada mañana con un mensaje único creado para vos, directo a tu WhatsApp.
            <br />Sin apps, sin vueltas: solo claridad y buena energía ✨
          </h1>

          {/* Diferenciales (badges) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              justifyContent: 'center',
              margin: '14px 0 6px',
            }}
          >
            {[
              'Personalizado con tu nombre, signo y emoción dominante 💫',
              'Contenido premium, no genérico ⭐',
              'Cercano y realista, sin humo 🔍',
            ].map((t) => (
              <span
                key={t}
                style={{
                  background: 'rgba(56,33,92,.9)',
                  border: '1px solid #5b3b94',
                  color: '#ffe8ad',
                  fontWeight: 600,
                  borderRadius: 999,
                  padding: '8px 12px',
                  fontSize: '.9rem',
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Microcopy que resalta el diferencial */}
          <p
            style={{
              color: '#F0F1F5',
              fontWeight: 600,
              fontSize: '1.05rem',
              margin: '10px 0 0',
            }}
          >
            No es un horóscopo cualquiera. <strong>Es TU mensaje</strong>, creado para tu día, tu energía y tu signo.
          </p>

          <h2
            style={{
              margin: '18px auto 0',
              maxWidth: 900,
              background: 'rgba(56,33,92,.97)',
              borderRadius: 22,
              padding: '8px 12px',
              color: '#FFCE4D',
              fontWeight: 700,
              fontSize: '1.2rem',
            }}
          >
            🚀 Obtené tu mensaje diario con estos beneficios:
          </h2>
        </section>

        {/* CARRUSEL */}
        <section style={{ maxWidth: 980, margin: '10px auto 0', padding: '30px 12px 24px', position: 'relative' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(s) => (swiperRef.current = s)}
            slidesPerView={3}
            centeredSlides
            spaceBetween={16}
            loop
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            pagination={{ type: 'fraction', el: '.thc-pagination' }}
            navigation={{ nextEl: '.thc-next', prevEl: '.thc-prev' }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 8 },
              540: { slidesPerView: 2, spaceBetween: 12 },
              900: { slidesPerView: 3, spaceBetween: 16 },
            }}
            style={{ overflow: 'visible' }}
          >
            {[
              {
                img: '/img/iconos/webP/horoscopo-personal.webp',
                h: 'Horóscopo personal (Lun a Sáb)',
                p: 'Mensajes únicos con tu nombre, signo y la emoción que más necesitás hoy. Claridad y foco para arrancar.',
              },
              {
                img: '/img/iconos/webP/frase-inspiradora.webp',
                h: 'Frase inspiradora',
                p: 'Un disparo de energía para elevar tu ánimo y alinearte con tu mejor versión en segundos.',
              },
              {
                img: '/img/iconos/webP/numero-color-suerte.webp',
                h: 'Número y color clave para hoy',
                p: 'Con tips simples para aprovechar su energía durante el día y potenciar tus resultados.',
              },
              {
                img: '/img/iconos/webP/meditacion.webp',
                h: 'Mini práctica de bienestar',
                p: 'Respiración o mindfulness para bajar ansiedad y recargar energía en minutos.',
              },
              {
                img: '/img/iconos/webP/domingo.webp',
                h: 'Cierre de semana (Domingo)',
                p: 'Reflexión + mini reto para cerrar en calma y empezar la semana con nueva fuerza.',
              },
              {
                img: '/img/iconos/webP/regalo-espacial.webp',
                h: 'Regalos especiales',
                p: 'Audios, guías y sorpresas exclusivas directo a tu WhatsApp. Solo para miembros.',
              },
            ].map((card, i) => (
              <SwiperSlide key={i}>
                <article
                  style={{
                    width: 230,
                    minHeight: 290,
                    margin: '8px auto',
                    padding: '22px 16px',
                    background: 'rgba(56,33,92,.97)',
                    borderRadius: 22,
                    boxShadow: '0 2px 14px rgba(0,0,0,.18)',
                    textAlign: 'center',
                  }}
                >
                  <Image
                    src={card.img}
                    alt={card.h}
                    width={64}
                    height={64}
                    style={{
                      width: 64,
                      height: 64,
                      marginBottom: 14,
                      background: '#251148',
                      border: '2px solid #392369',
                      borderRadius: 16,
                    }}
                  />
                  <h3 style={{ color: '#FFCE4D', fontWeight: 700, fontSize: 16, lineHeight: 1.22, margin: '0 0 8px' }}>
                    {card.h}
                  </h3>
                  <p style={{ margin: 0, color: '#fffbe7', fontSize: 13, lineHeight: 1.4 }}>{card.p}</p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Flechas & paginación */}
          <button
            className="thc-prev"
            aria-label="Anterior"
            style={navBtnStyle('left')}
          >
            ‹
          </button>
          <button
            className="thc-next"
            aria-label="Siguiente"
            style={navBtnStyle('right')}
          >
            ›
          </button>
          <div className="thc-pagination" style={{ textAlign: 'center', marginTop: 4, color: '#FFCE4D', fontWeight: 600 }} />
        </section>

        {/* PRUEBA SOCIAL simple */}
        <section
          style={{
            maxWidth: 900,
            margin: '8px auto 0',
            padding: '10px 14px',
            textAlign: 'center',
            background: 'rgba(56,33,92,.92)',
            border: '1px solid #5b3b94',
            borderRadius: 16,
            color: '#ffe8ad',
            fontWeight: 600,
          }}
        >
          <span>+250 personas ya reciben su mensaje premium cada mañana 🚀</span>
        </section>

        {/* CTA */}
        <div style={{ maxWidth: 520, margin: '14px auto 0', padding: '0 16px' }}>
          <a href="/registro-premium" style={ctaStyle}>
            🌟 Comenzar mi experiencia
          </a>
          {/* Tips para "Contenido preferido" (guía visual previa) */}
          <p
            style={{
              textAlign: 'center',
              color: '#ffe8ad',
              fontSize: '.95rem',
              marginTop: 10,
              opacity: 0.95,
            }}
          >
            Elegí tu contenido preferido: Amor 💕 · Dinero 💰 · Bienestar 🌱 · Energía espiritual ✨ · General 🌟
          </p>
        </div>

        {/* Footer simple */}
        <footer style={{ maxWidth: 900, margin: '28px auto 40px', textAlign: 'center', padding: '0 16px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              { href: '/quienes-somos', label: '¿Quiénes somos?' },
              { href: '/faq', label: 'Preguntas frecuentes' },
              { href: '/politica-de-privacidad', label: 'Política de privacidad' },
              { href: '/contacto', label: 'Contacto' },
            ].map((l) => (
              <li key={l.href} style={{ marginBottom: 8 }}>
                <a href={l.href} style={{ color: '#ffffff', textDecoration: 'none' }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p style={{ opacity: 0.9, marginTop: 16 }}>
            © {new Date().getFullYear()} Tu Horóscopo Cósmico. Todos los derechos reservados.
          </p>
        </footer>
      </main>
    </>
  );
}

const navBtnStyle = (side: 'left' | 'right') =>
  ({
    position: 'absolute' as const,
    top: '42%',
    [side]: 4,
    transform: 'translateY(-50%)',
    width: 44,
    height: 44,
    borderRadius: '50%',
    border: 0,
    background: 'rgba(255,255,255,.13)',
    backdropFilter: 'blur(5px)',
    color: '#fff',
    fontSize: 24,
    cursor: 'pointer',
  });

const ctaStyle: React.CSSProperties = {
  display: 'block',
  textAlign: 'center',
  textDecoration: 'none',
  margin: '18px auto 0',
  padding: '12px 18px',
  border: 'none',
  borderRadius: 32,
  fontWeight: 700,
  fontSize: '1.1rem',
  background: 'linear-gradient(120deg, #ffe27c, #ff6e7e)',
  color: '#29195a',
  boxShadow: '0 4px 24px #FFCE4D33',
};

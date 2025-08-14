import Head from 'next/head';

export default function Politica() {
  return (
    <>
      <Head><title>Política de Privacidad | Tu Horóscopo Cósmico</title></Head>
      <main className="min-h-screen bg-cosmic">
        <div className="container py-10 prose prose-invert">
          <h1>Política de Privacidad</h1>
          <p>Esta es una versión inicial orientada a cumplir con la Ley 18.331 de Protección de Datos Personales (Uruguay).
          Ajustaremos este contenido con tu versión final.</p>
          <h2>Datos que recolectamos</h2>
          <ul>
            <li>Nombre, signo, preferencia de contenido.</li>
            <li>Número de WhatsApp.</li>
          </ul>
          <h2>Finalidad</h2>
          <p>Usamos tus datos para enviarte mensajes personalizados por WhatsApp y gestionar tu suscripción.</p>
          <h2>Proveedores</h2>
          <p>Almacenamos datos en Supabase (PostgreSQL) y utilizamos WhatsApp Cloud API para comunicación. Ambos pueden
          estar ubicados fuera de Uruguay.</p>
          <h2>Derechos</h2>
          <p>Podés solicitar el acceso, rectificación o eliminación de tus datos escribiendo a contacto@tuhoroscopocosmico.com</p>
        </div>
      </main>
    </>
  );
}

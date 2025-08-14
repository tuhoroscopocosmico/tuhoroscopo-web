import Head from 'next/head';
import Link from 'next/link';

export default function Gracias() {
  return (
    <>
      <Head><title>¡Listo! | Tu Horóscopo Cósmico</title></Head>
      <main className="min-h-screen bg-cosmic">
        <div className="container py-16 text-center space-y-6">
          <h1 className="text-3xl font-extrabold">¡Gracias! 🎉</h1>
          <p className="text-white/80 max-w-lg mx-auto">
            Recibimos tus datos. En breve vas a recibir un WhatsApp con los pasos para activar tu suscripción.
          </p>
          <Link href="/" className="underline">Volver al inicio</Link>
        </div>
      </main>
    </>
  );
}

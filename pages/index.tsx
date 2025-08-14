import Head from 'next/head';
import Image from 'next/image';
import Formulario from '@/components/Formulario';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tu Horóscopo Cósmico</title>
        <meta name="description" content="Horóscopos personalizados vía WhatsApp. Simple, diario y real." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-cosmic">
        <div className="container py-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <Image src="/logo.svg" alt="Logo" width={72} height={72} priority />
            <h1 className="text-3xl font-extrabold tracking-tight">Tu Horóscopo Cósmico</h1>
            <p className="text-white/80 max-w-lg">
              Recibí mensajes diarios personalizados en tu WhatsApp. Sin apps. Sin vueltas. Listo para <strong>Uruguay</strong>.
            </p>
            <div className="w-full card">
              <Formulario />
            </div>
            <p className="text-xs text-white/50">
              Al continuar, aceptás nuestra <a className="underline" href="/politica">Política de Privacidad</a>.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

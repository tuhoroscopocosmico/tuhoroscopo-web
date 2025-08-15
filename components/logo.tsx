import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* Ajusta la ruta a tu logo real */}
      <Image
        src="/img/logo/logo.webp"
        alt="Tu Horóscopo Cósmico"
        width={72}
        height={72}
        priority
      />
      <div className="text-center">
        <p className="uppercase tracking-widest text-sm text-fuchsia-200/80">Tu Horóscopo</p>
        <h1 className="text-2xl md:text-3xl font-extrabold drop-shadow-sm">CÓSMICO</h1>
      </div>
    </div>
  );
}

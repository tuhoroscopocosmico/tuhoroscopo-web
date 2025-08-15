import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  desc: string;
  footer?: string;
};

export default function BenefitCard({ icon, title, desc, footer }: Props) {
  return (
    <div className="w-[280px] md:w-[320px] shrink-0 rounded-3xl bg-white/8 border border-white/10 backdrop-blur-md p-6 text-center shadow-xl">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-500/20 ring-1 ring-fuchsia-500/40">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/80 leading-relaxed">{desc}</p>
      {footer ? <p className="mt-3 text-xs text-white/60">{footer}</p> : null}
    </div>
  );
}

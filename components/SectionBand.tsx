type SectionBandProps = {
  children: React.ReactNode;
  eyebrow: string;
  title: string;
  intro?: string;
  variant?: "dark" | "light" | "emerald";
};

const variantClasses = {
  dark: {
    outer:
      "border-white/8 bg-[#0b1727]/88 text-white shadow-[0_28px_90px_rgba(0,0,0,0.28)]",
    glow:
      "bg-[radial-gradient(circle_at_top_left,rgba(199,154,59,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(61,139,97,0.14),transparent_22%)]",
    eyebrow: "text-primary-dark",
    title: "text-white",
    intro: "text-slate-300",
  },
  light: {
    outer:
      "border-white/8 bg-panel/96 text-ink shadow-[0_24px_70px_rgba(0,0,0,0.16)]",
    glow:
      "bg-[radial-gradient(circle_at_top_left,rgba(199,154,59,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.34),transparent_40%)]",
    eyebrow: "text-[#8f6d2f]",
    title: "text-slate-950",
    intro: "text-slate-700",
  },
  emerald: {
    outer:
      "border-primary/18 bg-gradient-to-br from-[#18301f] to-[#0f1d16] text-white shadow-[0_24px_70px_rgba(0,0,0,0.2)]",
    glow:
      "bg-[radial-gradient(circle_at_top_left,rgba(199,154,59,0.14),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]",
    eyebrow: "text-primary-dark",
    title: "text-white",
    intro: "text-slate-100",
  },
} as const;

export function SectionBand({
  children,
  eyebrow,
  title,
  intro,
  variant = "light",
}: SectionBandProps) {
  const styles = variantClasses[variant];

  return (
    <section
      className={`relative overflow-hidden rounded-[2.5rem] border p-6 sm:p-8 ${styles.outer}`}
    >
      <div className={`absolute inset-0 ${styles.glow}`} />
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="relative">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${styles.eyebrow}`}>
              {eyebrow}
            </p>
            <h2
              className={`mt-3 font-[family-name:var(--font-heading)] text-4xl uppercase tracking-[0.06em] sm:text-5xl ${styles.title}`}
            >
              {title}
            </h2>
          </div>
          {intro ? <p className={`max-w-xl text-sm leading-7 ${styles.intro}`}>{intro}</p> : null}
        </div>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

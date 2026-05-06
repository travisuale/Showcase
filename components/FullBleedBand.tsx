type FullBleedBandProps = {
  children: React.ReactNode;
  variant?: "dark" | "light" | "emerald";
};

const fullBleedVariants = {
  dark:
    "border-y border-white/8 bg-[linear-gradient(180deg,rgba(8,18,31,0.2),rgba(8,18,31,0.72),rgba(8,18,31,0.2))]",
  light:
    "border-y border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(240,244,248,0.9),rgba(255,255,255,0.05))]",
  emerald:
    "border-y border-primary/12 bg-[linear-gradient(180deg,rgba(19,42,29,0.25),rgba(19,42,29,0.82),rgba(19,42,29,0.25))]",
} as const;

export function FullBleedBand({
  children,
  variant = "dark",
}: FullBleedBandProps) {
  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div className={`py-10 sm:py-14 ${fullBleedVariants[variant]}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
      </div>
    </section>
  );
}

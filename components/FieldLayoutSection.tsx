import { fieldLayouts } from "@/data/fieldLayouts";

type FieldLayoutSectionProps = {
  title: string;
  intro: string;
  detailed?: boolean;
  useSessionVisuals?: boolean;
};

export function FieldLayoutSection({
  title,
  intro,
  detailed = false,
  useSessionVisuals = false,
}: FieldLayoutSectionProps) {
  const sections = [
    {
      name: "Position Groups",
      shortTitle: "Position Groups",
      items: fieldLayouts.positionGroups,
      visual: "/field-layouts/repo-session-1.png?v=1",
    },
    {
      name: "1v1 (Skills) + 3v3 (Combo/Bigs)",
      shortTitle: "1v1 + 3v3",
      items: fieldLayouts.skillGroups,
      visual: "/field-layouts/repo-session-2.png?v=1",
    },
    {
      name: "7v7 (Skills/Combo) + 1v1 (Bigs)",
      shortTitle: "7v7 + 1v1",
      items: fieldLayouts.bigs,
      visual: "/field-layouts/repo-session-3.png?v=1",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#0b1727] px-6 py-8 text-white shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:px-8 sm:py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(199,154,59,0.18),transparent_26%),radial-gradient(circle_at_95%_10%,rgba(61,139,97,0.14),transparent_22%)]" />
      <div className="relative">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-dark">
        Field Layouts
      </p>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-sm leading-7 text-slate-300">{intro}</p>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {sections.map((section, index) => (
          <article
            key={section.name}
            className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5 backdrop-blur"
          >
            <div className="min-h-[104px] sm:min-h-[120px]">
              <div className="flex justify-end">
                <span className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-dark">
                  Session {index + 1}
                </span>
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-bold leading-tight text-white">
                  {section.shortTitle}
                </h3>
                <p className="mt-2 max-w-[24ch] text-sm leading-6 text-slate-300">
                  {section.name}
                </p>
              </div>
            </div>
            {useSessionVisuals ? (
              <div className="mt-4 overflow-hidden rounded-2xl border border-white/8 bg-[#05080f] p-3">
                <img
                  src={section.visual}
                  alt={`${section.shortTitle} visual`}
                  className="block h-auto w-full rounded-xl"
                />
              </div>
            ) : (
              <div className="mt-4 space-y-4">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/8 bg-black/12 p-4"
                  >
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.description}
                      {detailed
                        ? " Coaches should preload athletes at this station before the whistle to keep transitions under five minutes."
                        : ""}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}

import type { RotationGroup, ScheduleBlock } from "@/data/schedule";

type ScheduleSectionProps = {
  title: string;
  intro: string;
  blocks: ScheduleBlock[];
  drillGroups?: string[];
  rotations?: RotationGroup[];
};

export function ScheduleSection({
  title,
  intro,
  blocks,
  drillGroups,
  rotations,
}: ScheduleSectionProps) {
  return (
    <section className="rounded-[2.25rem] border border-white/8 bg-surface p-6 text-white shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary-dark">
            Schedule
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">{title}</h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-slate-300">{intro}</p>
      </div>

      <div className="mt-8 grid gap-4">
        {blocks.map((block) => (
          <article
            key={`${block.time}-${block.title}`}
            className="grid gap-3 rounded-[1.75rem] border border-white/10 bg-white/6 p-4 backdrop-blur sm:grid-cols-[120px_1fr] sm:gap-6 sm:p-5"
          >
            <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary-dark">
              {block.time}
            </p>
            <div>
              <h3 className="text-lg font-bold text-white">{block.title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-300">{block.details}</p>
            </div>
          </article>
        ))}
      </div>

      {drillGroups ? (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Drill Groups</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {drillGroups.map((group) => (
              <span
                key={group}
                className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm font-medium text-primary-dark"
              >
                {group}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {rotations ? (
        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Team Rotations</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {rotations.map((rotation) => (
              <article
                key={rotation.team}
                className="rounded-[1.75rem] border border-white/10 bg-black/12 p-5"
              >
                <h4 className="text-base font-bold text-white">{rotation.team}</h4>
                <ol className="mt-3 space-y-2 text-sm text-slate-300">
                  {rotation.stations.map((station, index) => (
                    <li key={station}>
                      <span className="font-semibold text-primary-dark">{index + 1}.</span>{" "}
                      {station}
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

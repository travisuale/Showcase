import { FieldLayoutSection } from "@/components/FieldLayoutSection";
import { FullBleedBand } from "@/components/FullBleedBand";
import { Header } from "@/components/Header";
import { ScheduleSection } from "@/components/ScheduleSection";
import { event } from "@/data/event";
import { simpleSchedule } from "@/data/schedule";
import { teams } from "@/data/teams";

export default function ShowcasePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-10">
      <Header
        audience="Players & Parents"
        title={event.name}
        titleTop="Football Showcase"
        titleBottom="High School Football"
        description={event.description}
        featuredTeams={teams}
      />

      <section className="rounded-[2rem] border border-white/10 bg-slate-950 px-5 py-5 text-slate-100 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:px-6 sm:py-6">
        <dl className="grid gap-6 md:grid-cols-3">
          <div>
            <dt className="text-sm font-bold uppercase tracking-[0.18em] text-primary-dark">
              Date
            </dt>
            <dd className="mt-2 text-lg leading-8 sm:text-2xl">{event.date}</dd>
          </div>
          <div>
            <dt className="text-sm font-bold uppercase tracking-[0.18em] text-primary-dark">
              Time
            </dt>
            <dd className="mt-2 text-lg leading-8 sm:text-2xl">{event.time}</dd>
          </div>
          <div>
            <dt className="text-sm font-bold uppercase tracking-[0.18em] text-primary-dark">
              Location
            </dt>
            <dd className="mt-2 text-lg leading-8 sm:text-2xl">{event.location}</dd>
          </div>
        </dl>
      </section>

      <FullBleedBand variant="dark">
        <ScheduleSection
          title="Showcase Schedule"
          intro=""
          blocks={simpleSchedule}
        />
      </FullBleedBand>

      <FullBleedBand variant="emerald">
        <FieldLayoutSection
          title="How the fields are organized"
          intro=""
          useSessionVisuals
        />
      </FullBleedBand>
    </main>
  );
}

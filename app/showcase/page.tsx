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
        facts={[
          { label: "Date", value: event.date },
          { label: "Time", value: event.time },
          { label: "Location", value: event.location },
        ]}
      />

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

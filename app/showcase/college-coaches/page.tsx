import { FieldLayoutSection } from "@/components/FieldLayoutSection";
import { FullBleedBand } from "@/components/FullBleedBand";
import { Header } from "@/components/Header";
import { ScheduleSection } from "@/components/ScheduleSection";
import { SectionBand } from "@/components/SectionBand";
import { event } from "@/data/event";
import { simpleSchedule } from "@/data/schedule";
import { teams } from "@/data/teams";

export default function CollegeCoachesPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-10">
      <Header
        audience="College Coaches"
        title="Recruiting View"
        description={`Protected access for college coaches attending ${event.name} on ${event.date} at ${event.location}.`}
      />

      <FullBleedBand variant="light">
        <SectionBand
          eyebrow="Event Overview"
          title="Recruiting-Focused Access"
          intro="Use this page for the quick event summary, field flow, attending teams, and prospect board access before or during the showcase."
          variant="light"
        >
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white px-5 py-6">
              <a
                href="https://example.com/prospects"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#16263b]"
              >
                View Full Prospect Board
              </a>
            </div>
            <article className="rounded-[2rem] border border-primary/18 bg-gradient-to-br from-[#18301f] to-[#0f1d16] px-5 py-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-dark">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-100">
                <p>{event.contact.name}</p>
                <p>{event.contact.email}</p>
                <p>{event.contact.phone}</p>
              </div>
            </article>
          </div>
        </SectionBand>
      </FullBleedBand>

      <FullBleedBand variant="dark">
        <ScheduleSection
          title="Showcase Schedule"
          intro="Quick-reference schedule for college coaches working through the venue efficiently."
          blocks={simpleSchedule}
        />
      </FullBleedBand>

      <FullBleedBand variant="emerald">
        <FieldLayoutSection
          title="Evaluation Areas"
          intro="The venue is divided by athlete type and evaluation setting for quick prospect tracking."
        />
      </FullBleedBand>

      <FullBleedBand variant="light">
        <SectionBand
          eyebrow="Attendance"
          title="Teams Attending"
          intro="A quick recruiting reference for the six showcase team groups on site."
          variant="light"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {teams.map((team) => (
              <div
                key={team}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800"
              >
                {team}
              </div>
            ))}
          </div>
        </SectionBand>
      </FullBleedBand>
    </main>
  );
}

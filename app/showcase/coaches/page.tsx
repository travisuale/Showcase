import { FieldLayoutSection } from "@/components/FieldLayoutSection";
import { FullBleedBand } from "@/components/FullBleedBand";
import { Header } from "@/components/Header";
import { ScheduleSection } from "@/components/ScheduleSection";
import { SectionBand } from "@/components/SectionBand";
import { event } from "@/data/event";
import { detailedSchedule, drillGroups, rotations } from "@/data/schedule";
import { teams } from "@/data/teams";

const instructions = [
  "Move teams on the whistle, not after the final rep at a station.",
  "Load the next athlete before each rep to avoid dead time.",
  "Keep wristband colors visible for fast regrouping.",
  "Report injuries or timing issues to operations immediately.",
];

export default function CoachesPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-6 sm:px-6 sm:py-10">
      <Header
        audience="High School Coaches"
        title="Coach Operations"
        description={`Operational detail for ${event.name} on ${event.date} from ${event.time}. Use this page to manage flow, assignments, and station timing.`}
      />

      <FullBleedBand variant="light">
        <SectionBand
          eyebrow="Operational Overview"
          title="Fast Transitions Create Clean Evaluations"
          intro="This version is for staff and high school coaches working the event. It includes the fuller cadence, team rotations, and station expectations needed to keep the showcase on time."
          variant="light"
        >
          <div className="rounded-[2rem] border border-primary/18 bg-gradient-to-br from-[#18301f] to-[#0f1d16] px-5 py-6 text-sm leading-7 text-slate-100">
            <p className="font-bold uppercase tracking-[0.18em] text-primary-dark">Venue Anchor</p>
            <p className="mt-3">
              All check-ins, coach huddles, and resets begin from the main concourse by the stadium entrance at {event.location}.
            </p>
          </div>
        </SectionBand>
      </FullBleedBand>

      <FullBleedBand variant="dark">
        <ScheduleSection
          title="Detailed Schedule & Rotations"
          intro="Built for field leads and staff who need the operational timing, drill group framing, and team station order."
          blocks={detailedSchedule}
          drillGroups={drillGroups}
          rotations={rotations}
        />
      </FullBleedBand>

      <FullBleedBand variant="emerald">
        <FieldLayoutSection
          title="Detailed Field Map"
          intro="Each area is labeled by evaluation purpose so coaches can stage athletes before the next whistle."
          detailed
        />
      </FullBleedBand>

      <FullBleedBand variant="light">
        <SectionBand
          eyebrow="Field Control"
          title="Assignments And Timing Standards"
          intro="The final section keeps team groupings and on-field expectations together so staff can reference one control point."
          variant="light"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <article>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8f6d2f]">
                Team Assignments
              </p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-slate-700 sm:grid-cols-2 sm:text-base">
                {teams.map((team) => (
                  <li
                    key={team}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-800"
                  >
                    {team}
                  </li>
                ))}
              </ul>
            </article>
            <article>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8f6d2f]">
                Staying On Schedule
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                {instructions.map((item) => (
                  <li key={item} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </SectionBand>
      </FullBleedBand>
    </main>
  );
}

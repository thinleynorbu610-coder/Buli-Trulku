import { GraduationCap } from "lucide-react";
import { LineagePortrait } from "@/components/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";
import { teachers } from "@/data/buliTrulku";
import type { Teacher } from "@/data/types";

const periods: { key: Teacher["period"]; title: string; blurb: string }[] = [
  {
    key: "Early years",
    title: "The early years",
    blurb: "Teachers of writing, Rigney and the first teachings, named in the biography.",
  },
  {
    key: "Recognition",
    title: "Recognition and enthronement",
    blurb: "Those who conducted the recognition and enthronement in 1960.",
  },
  {
    key: "Dudjom Rinpoche & Lama Karpo",
    title: "Kyabje Dudjom Rinpoche & Lama Karpo",
    blurb: "From the meeting at Kalimpong, and the guidance of his root teacher.",
  },
];

function TeacherCard({ teacher, i }: { teacher: Teacher; i: number }) {
  return (
    <Reveal delay={Math.min(i * 0.06, 0.25)} className="h-full">
      <article
        id={teacher.id}
        aria-labelledby={`${teacher.id}-name`}
        className="parchment-card flex h-full gap-5 p-5 sm:p-6"
      >
        <div className="w-24 shrink-0 sm:w-28">
          <LineagePortrait
            compact
            src={teacher.image}
            alt={`Portrait of ${teacher.name}`}
            placeholderLabel={teacher.name}
            motif="lamp"
            hideCaption
          />
        </div>
        <div className="min-w-0">
          <h3 id={`${teacher.id}-name`} className="font-display text-2xl font-semibold leading-tight">
            {teacher.name}
          </h3>
          {teacher.from && (
            <p className="eyebrow mt-1 text-[0.58rem] leading-relaxed text-gold-ink">
              {teacher.from}
            </p>
          )}
          <p className="mt-3 text-[0.97rem] leading-relaxed text-brown/90">
            {teacher.relationship}
          </p>
          {teacher.teachings && (
            <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Teachings received">
              {teacher.teachings.map((t) => (
                <li
                  key={t}
                  className="border border-gold/50 bg-parchment/60 px-2.5 py-0.5 text-[0.8rem] leading-snug"
                >
                  {t}
                </li>
              ))}
            </ul>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export function TeacherSection() {
  return (
    <SectionShell tone="ivory" from="night" aria-labelledby="teachers-intro">
      <Reveal className="mx-auto max-w-2xl text-center">
        <GraduationCap className="mx-auto mb-5 h-9 w-9 text-gold" aria-hidden="true" />
        <p id="teachers-intro" className="font-display text-2xl italic leading-[1.55] text-brown">
          Thirteen teachers are named in the biography. Each relationship below is
          given exactly as the biography states it — nothing more.
        </p>
      </Reveal>

      <div className="mt-24 space-y-24">
        {periods.map((period) => {
          const list = teachers.filter((t) => t.period === period.key);
          return (
            <section key={period.key} aria-labelledby={`period-${period.key}`}>
              <Reveal className="mb-10 border-b border-gold/50 pb-5">
                <h2
                  id={`period-${period.key}`}
                  className="font-display text-3xl font-medium uppercase tracking-[0.08em] sm:text-4xl"
                >
                  {period.title}
                </h2>
                <p className="mt-2 text-brown/70">{period.blurb}</p>
              </Reveal>
              <div className="grid gap-6 lg:grid-cols-2">
                {list.map((t, i) => (
                  <TeacherCard key={t.id} teacher={t} i={i} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </SectionShell>
  );
}

import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { LineageTimeline } from "@/components/sections/LineageTimeline";
import { TransitionToPresent } from "@/components/sections/TransitionToPresent";
import { PresentIncarnation } from "@/components/sections/PresentIncarnation";
import { EarlyYears } from "@/components/sections/EarlyYears";
import { Recognition } from "@/components/sections/Recognition";
import { DudjomMeeting } from "@/components/sections/DudjomMeeting";
import { LamaKarpo } from "@/components/sections/LamaKarpo";
import { RetreatYears } from "@/components/sections/RetreatYears";
import { Yongphula } from "@/components/sections/Yongphula";
import { Zangthi } from "@/components/sections/Zangthi";
import { ShedraSection } from "@/components/sections/ShedraSection";
import { LegacyStats } from "@/components/sections/LegacyStats";
import { FoundationSection } from "@/components/sections/FoundationSection";
import { FinalMessage } from "@/components/sections/FinalMessage";

/**
 * The story, in the order a visitor walks it:
 * landscape → introduction → lineage (1–10) → the present incarnation →
 * early years → recognition → Dudjom Rinpoche → Lama Karpo → retreat →
 * Yongphula → Zangthi → shedra → legacy → foundation → the journey continues.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <LineageTimeline />
      <TransitionToPresent />
      <PresentIncarnation />
      <EarlyYears />
      <Recognition />
      <DudjomMeeting />
      <LamaKarpo />
      <RetreatYears />
      <Yongphula />
      <Zangthi />
      <ShedraSection />
      <LegacyStats />
      <FoundationSection />
      <FinalMessage />
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LifeTimeline } from "@/components/sections/LifeTimeline";

export const metadata: Metadata = {
  title: "Life Timeline",
  description:
    "The major events in the life of His Eminence Lama Sonam Loday, Kyabje Buli Trulku Rinpoche, from his birth in 1949 to the present.",
};

export default function TimelinePage() {
  return (
    <>
      <PageHeader
        eyebrow="1949 to the present"
        title="Life Timeline"
        subtitle="The milestones of a life of study, retreat, teaching and service."
        variant="dawn"
      />
      <LifeTimeline />
    </>
  );
}

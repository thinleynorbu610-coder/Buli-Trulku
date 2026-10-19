import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { FoundationDetail } from "@/components/sections/FoundationDetail";

export const metadata: Metadata = {
  title: "Duejom Terling Shedra Foundation",
  description:
    "The launch, vision, mission and objectives of the Duejom Terling Shedra Foundation, established by Kyabje Buli Trulku Rinpoche on 21 November 2014.",
};

export default function FoundationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Established 21 November 2014"
        title="The Foundation"
        subtitle="Duejom Terling Shedra Foundation"
        variant="dusk"
      />
      <FoundationDetail />
    </>
  );
}

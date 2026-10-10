import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { PlaceSection } from "@/components/sections/PlaceSection";

export const metadata: Metadata = {
  title: "Monasteries & Places",
  description:
    "Monasteries, retreat places and sacred sites associated with the story of Kyabje Buli Trulku Rinpoche.",
};

export default function PlacesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sacred geography"
        title="Monasteries & Places"
        subtitle="Where the story unfolds."
        variant="dawn"
      />
      <PlaceSection />
    </>
  );
}

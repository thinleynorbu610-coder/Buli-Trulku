import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { LineageOverview } from "@/components/sections/LineageOverview";

export const metadata: Metadata = {
  title: "The Lineage",
  description:
    "The eleven lineage holders of Kyabje Buli Trulku Rinpoche, from Phagpa Magapa to the present Buli Trulku, Lama Sonam Loday.",
};

export default function LineagePage() {
  return (
    <>
      <PageHeader
        eyebrow="Eleven chapters"
        title="The Lineage"
        subtitle="From Phagpa Magapa to the present Buli Trulku — choose a name to read its chapter."
      />
      <LineageOverview />
    </>
  );
}

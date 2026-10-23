import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { ShedraSection } from "@/components/sections/ShedraSection";
import { LegacyStats } from "@/components/sections/LegacyStats";
import { FinalMessage } from "@/components/sections/FinalMessage";

export const metadata: Metadata = {
  title: "The Living Legacy",
  description:
    "Droduel Tshangchen Shedra, thirteen institutions and meditation centers, and more than three hundred three-year retreat practitioners: the living legacy of Kyabje Buli Trulku Rinpoche.",
};

export default function LegacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="2005 to the present"
        title="The Living Legacy"
        subtitle="A shedra, thirteen institutions, and the practitioners who carry the Dharma on."
        variant="dusk"
      />
      <ShedraSection from="night" />
      <LegacyStats />
      <FinalMessage from="night" />
    </>
  );
}

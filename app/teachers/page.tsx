import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { TeacherSection } from "@/components/sections/TeacherSection";

export const metadata: Metadata = {
  title: "Teachers",
  description:
    "The teachers of Kyabje Buli Trulku Rinpoche named in the biography, including Kyabje Dudjom Rinpoche and Lama Karpo.",
};

export default function TeachersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gratitude to the teachers"
        title="Teachers"
        subtitle="Those named in the biography, and what they gave."
        variant="mist"
      />
      <TeacherSection />
    </>
  );
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { Gallery } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "A photographic archive of Kyabje Buli Trulku Rinpoche: portraits, teachers, monasteries, retreats, teachings, ceremonies and historical photographs.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="The archive"
        title="Photo Gallery"
        subtitle="Portraits, places and ceremonies, catalogued in nine collections."
      />
      <Gallery />
    </>
  );
}

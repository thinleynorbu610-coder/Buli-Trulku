export type Motif =
  | "lotus"
  | "wheel"
  | "mountain"
  | "lamp"
  | "manuscript"
  | "monastery"
  | "knot";

export interface Fact {
  label: string;
  value: string;
}

export interface LineageHolder {
  id: string;
  /** 1–10 are rendered by LineageTimeline; 11 is the present incarnation */
  number: number;
  name: string;
  /** Short tagline shown under the name */
  title?: string;
  /** Eyebrow label, e.g. "The beginning of the lineage" */
  label?: string;
  /** Place of birth / association, shown with a map pin */
  place?: string;
  story: string[];
  facts?: Fact[];
  /** Golden highlight card */
  highlight?: string;
  /** Stops for the small journey diagram */
  journey?: string[];
  parents?: { father: string; mother: string };
  /** "landscape" uses a wide scene placeholder; "minimal" is a quiet centred layout */
  layout: "portrait" | "landscape" | "minimal";
  symbol: Motif;
  image?: string;
  imageLabel: string;
  imageAlt: string;
  /** One line used in the /lineage overview */
  summary: string;
}

export interface LifeEvent {
  id: string;
  /** What is shown big: "1949", "Age 6", "Present" */
  when: string;
  title: string;
  description: string;
  anchor: string; // link into the story page
}

export interface Teacher {
  id: string;
  name: string;
  /** Where they are from, only if stated in the biography */
  from?: string;
  /** Exactly what the biography says about the relationship */
  relationship: string;
  /** Teachings received, if stated */
  teachings?: string[];
  period: "Early years" | "Recognition" | "Dudjom Rinpoche & Lama Karpo";
  image?: string;
}

export interface Place {
  id: string;
  name: string;
  region?: string;
  description: string;
  year?: string;
  group: "Life & teachings" | "Retreat places";
  image?: string;
  /** Add a map link / embed later, e.g. a Google Maps URL */
  mapUrl?: string;
}

export interface Institution {
  id: string;
  name: string;
  year?: string;
  location?: string;
  note: string;
}

export type GalleryCategory =
  | "Portraits"
  | "Early Life"
  | "Teachers"
  | "Monasteries"
  | "Retreats"
  | "Teachings"
  | "Ceremonies"
  | "Foundation"
  | "Historical Photographs";

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: string;
  src?: string;
  caption?: string;
  year?: string;
  location?: string;
  credit?: string;
  /** Frame shape in the archive grid. Defaults to a pleasing mix. */
  ratio?: "portrait" | "landscape" | "square";
}

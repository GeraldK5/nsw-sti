
export interface MediaItem {
  type: "image" | "video";
  url: string;
}


export interface ScienceEvent {
  id: string;
  slug: string;
  nsw_id: string;      // references NationalScienceWeek.id
  title: string;
  subtitle?: string;
  tags?: string[];
  mainContent?: string;
  images?: string[];   // array of image URLs
  cover?: MediaItem;   // main image or video
  venue?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProgrammeDay {
  day: string;
  content: string;
}

export interface NationalScienceWeek {
  id: string;
  year: number;
  description?: string;
  mainContent?: string;
  cover?: MediaItem;   // main image or video
  location?: string;
  startDate: string;
  endDate: string;
  callForApplications: boolean;
  programme?: ProgrammeDay[];
  createdAt: string;
  updatedAt: string;
}


export interface SiteData {
  nsw: NationalScienceWeek[];
  events: ScienceEvent[];
}

// ── Helper ───────────────────────────────────────────────────

export const getLatestNSW = (nsws: NationalScienceWeek[]): NationalScienceWeek | undefined =>
  [...nsws].sort((a, b) => b.year - a.year)[0];
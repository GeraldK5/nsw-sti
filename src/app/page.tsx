import data from "@/data/nsw.json";
import Navbar from "@/components/landing/layout/topNav";
import HeroSection from "@/components/landing/home/hero";
import type { SiteData } from "@/types/content";

export default function Page() {
  const typedData = data as SiteData;
  return (
    <>
      <Navbar />
      <HeroSection nsw={typedData.nsw} />
    </>
  );
}
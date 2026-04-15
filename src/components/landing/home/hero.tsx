"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { getLatestNSW } from "@/types/content";
import type { NationalScienceWeek } from "@/types/content";

interface HeroSectionProps {
  nsw: NationalScienceWeek[];
}

function formatDateRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  const opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long" };
  return `${s.toLocaleDateString("en-UG", opts)} – ${e.toLocaleDateString("en-UG", { ...opts, year: "numeric" })}`;
}

export default function HeroSection({ nsw }: HeroSectionProps) {
  const latest = getLatestNSW(nsw);
  if (!latest) return null;

  const { year, cover, location, startDate, endDate, mainContent, callForApplications } = latest;
  const dateRange = formatDateRange(startDate, endDate);

  return (
    <section className="relative w-full bg-secondary overflow-hidden min-h-[88vh] flex flex-col justify-center">

      {/* ── Background noise texture ─────────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px",
        }}
      />

      {/* ── Vector Background ─────────────────────────────── */}
      <div className="absolute left-0 top-0">
        <Image
          src="/vectors/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          unoptimized={true}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Text ──────────────────────────────────── */}
          <div className="flex flex-col gap-7">

            {/* Date + Location pills */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className="border-primary/40 text-background bg-primary/10 text-xs gap-1.5 px-3 py-1 font-medium"
              >
                <Calendar size={11} />
                {dateRange}
              </Badge>
              {location && (
                <Badge
                  variant="outline"
                  className="border-gold/40 text-gold bg-gold/10 text-xs gap-1.5 px-3 py-1 font-medium"
                >
                  <MapPin size={11} />
                  {location}
                </Badge>
              )}
            </div>

            {/* Title */}
            <div className="flex flex-col gap-1 leading-none">
              <span
                className="text-white/80 font-semibold tracking-widest uppercase text-sm lg:text-base"
                style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.22em" }}
              >
                National Science Week
              </span>

              {/* Year — gradient bold */}
              <span
                className="font-black leading-none"
                style={{
                  fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
                  fontSize: "clamp(5rem, 14vw, 10rem)",
                  background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-teal) 40%, var(--color-background) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.04em",
                }}
              >
                {year}
              </span>
            </div>

            {/* Body */}
            {mainContent && (
              <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                {mainContent}
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="/about">
                <Button className="hover:bg-primary/80 text-primary-foreground font-semibold px-6 gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all whitespace-nowrap">
                  About
                  <ArrowRight size={15} />
                </Button>
              </Link>

              {callForApplications && (
                <Link href="/apply">
                  <Button className="border border-bg-light/40 text-background hover:bg-bg-light/10 hover:border-bg-light/70 font-semibold px-6 gap-2 bg-transparent transition-all whitespace-nowrap">
                    Get Involved
                    <ArrowRight size={15} />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* ── RIGHT: Media ────────────────────────────────── */}
          <div className="relative">

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-5 h-5 border-t-[2px] border-l-[2px] border-primary rounded-tl-2xl z-10" />
              <span className="absolute top-0 right-0 w-5 h-5 border-t-[2px] border-r-[2px] border-gold rounded-tr-2xl z-10" />
              <span className="absolute bottom-0 left-0 w-5 h-5 border-b-[2px] border-l-[2px] border-gold rounded-bl-2xl z-10" />
              <span className="absolute bottom-0 right-0 w-5 h-5 border-b-[2px] border-r-[2px] border-primary rounded-br-2xl z-10" />

              {cover?.type === "video" ? (
                <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={cover.url}
                    title={`Uganda National Science Week ${year}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : cover?.type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cover.url}
                  alt={`Uganda National Science Week ${year}`}
                  className="w-full aspect-video object-cover"
                />
              ) : (
                /* Placeholder */
                <div className="w-full aspect-video flex items-center justify-center bg-white/5">
                  <div className="flex flex-col items-center gap-3 text-white/20">
                    <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-xs tracking-widest uppercase">Cover Media</span>
                  </div>
                </div>
              )}
            </div>

            {/* Floating year badge */}
            <div className="absolute -bottom-4 -left-4 bg-secondary border border-white/10 rounded-xl px-4 py-2 shadow-lg hidden lg:flex flex-col">
              <span className="text-[10px] text-white/35 tracking-widest uppercase">Edition</span>
              <span className="text-white font-bold text-lg leading-tight" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
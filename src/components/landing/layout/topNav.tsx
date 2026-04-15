"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Programme", href: "/programme" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
];



export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-background sticky top-0 z-50">

            {/* ── Main nav ────────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="w-8 h-8 rounded-full bg-teal/20 border border-teal/50 flex items-center justify-center">
                            <Image
                                src="/logos/logo.svg"
                                alt="Science Week Logo"
                                width={40}
                                height={40}
                                unoptimized={true}
                            />
                        </div>
                        <div className="leading-tight">
                            <p className="text-foreground font-bold text-sm tracking-wide group-hover:text-teal transition-colors">
                                Science Week
                            </p>
                            <p className="text-muted-foreground text-[10px] tracking-[0.18em] uppercase">Uganda · 2026</p>
                        </div>
                    </Link>

                    {/* Desktop links */}
                    <nav className="hidden lg:flex items-center gap-0.5">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group rounded-md hover:bg-black/5"
                            >
                                {link.label}
                                <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-teal scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA + mobile toggle */}
                    <div className="flex items-center gap-2">
                        <Button
                            asChild
                            size="sm"
                            className="hidden sm:inline-flex bg-teal hover:bg-teal/90 text-primary-foreground font-semibold text-sm"
                        >
                            <Link href="/register">Register</Link>
                        </Button>

                        <button
                            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-black/5 transition-colors"
                            onClick={() => setOpen((v) => !v)}
                            aria-label="Toggle menu"
                        >
                            {open ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Mobile menu ─────────────────────────────────────── */}
            {open && (
                <div className="lg:hidden border-t border-border bg-background">
                    <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-0.5">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-black/5 rounded-md transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="pt-2">
                            <Button
                                asChild
                                className="w-full bg-teal hover:bg-teal/90 text-primary-foreground font-semibold"
                            >
                                <Link href="/register" onClick={() => setOpen(false)}>
                                    Register Now
                                </Link>
                            </Button>
                        </div>
                    </nav>
                </div>
            )}

            {/* Bottom accent line */}
            <div className="h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
        </header>
    );
}
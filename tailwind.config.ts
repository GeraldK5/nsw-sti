import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class", ".dark"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Brand Colors from @theme in global.css
            colors: {
                // Primary Brand Colors
                primary: "var(--color-primary)",
                teal: "var(--color-teal)",
                secondary: "var(--color-secondary)",
                gold: "var(--color-gold)",
                brown: "var(--color-brown)",
                "light-brown": "var(--color-light-brown)",
                "dark-brown": "var(--color-dark-brown)",
                "brand-dark": "var(--color-dark)",
                "bg-light": "var(--color-background)",

                // Semantic Colors (shadcn/ui)
                background: "var(--color-background)",
                foreground: "var(--color-foreground)",
                card: "var(--color-card)",
                "card-foreground": "var(--color-card-foreground)",
                popover: "var(--color-popover)",
                "popover-foreground": "var(--color-popover-foreground)",
                muted: "var(--color-muted)",
                "muted-foreground": "var(--color-muted-foreground)",
                accent: "var(--color-accent)",
                "accent-foreground": "var(--color-accent-foreground)",
                destructive: "var(--color-destructive)",
                input: "var(--color-input)",
                border: "var(--color-border)",

                // Sidebar Colors
                sidebar: "var(--color-sidebar)",
                "sidebar-foreground": "var(--color-sidebar-foreground)",
                "sidebar-primary": "var(--color-sidebar-primary)",
                "sidebar-primary-foreground": "var(--color-sidebar-primary-foreground)",
                "sidebar-accent": "var(--color-sidebar-accent)",
                "sidebar-accent-foreground": "var(--color-sidebar-accent-foreground)",
                "sidebar-border": "var(--color-sidebar-border)",
                "sidebar-ring": "var(--color-sidebar-ring)",

                // Chart Colors
                "chart-1": "var(--color-chart-1)",
                "chart-2": "var(--color-chart-2)",
                "chart-3": "var(--color-chart-3)",
                "chart-4": "var(--color-chart-4)",
                "chart-5": "var(--color-chart-5)",
            },

            // Shadow Definitions
            boxShadow: {
                "shadow-3xl": "var(--shadow-3xl)",
                "shadow-auth": "var(--shadow-auth)",
                "shadow-dark-auth": "var(--shadow-dark-auth)",
            },

            // Font Sizes
            fontSize: {
                xm: "var(--text-xm)",
                "9xl": "var(--text-9xl)",
                "40": "var(--text-40)",
                "52": "var(--text-52)",
                sm: "var(--text-sm)",
            },

            // Spacing Extensions
            spacing: {
                "45p": "var(--spacing-45p)",
                "85p": "var(--spacing-85p)",
                "90p": "var(--spacing-90p)",
                "68": "var(--spacing-68)",
                "540": "var(--spacing-540)",
                "8xl": "var(--spacing-8xl)",
            },

            // Border Radius
            borderRadius: {
                sm: "calc(var(--radius) * 0.6)",
                md: "calc(var(--radius) * 0.8)",
                lg: "var(--radius)",
                xl: "calc(var(--radius) * 1.4)",
                "2xl": "calc(var(--radius) * 1.8)",
                "3xl": "calc(var(--radius) * 2.2)",
                "4xl": "calc(var(--radius) * 2.6)",
            },

            // Ring (Focus States)
            ringColor: {
                ring: "var(--color-ring)",
            },

            // Breakpoints
            screens: {
                xs: "var(--breakpoint-xs)",
                mobile: "var(--breakpoint-mobile)",
            },

            // Animations
            animation: {
                slide: "var(--animate-slide)",
            },

            // Keyframes
            keyframes: {
                slide: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-103%)" },
                },
            },
        },
    },
} satisfies Config;

export default config;

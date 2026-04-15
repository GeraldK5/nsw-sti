// app/layout.tsx  ← root layout, clean, no Header/Footer
import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import './globals.css'
// import Providers from './providers'
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'National Science Week',
  description: 'A week-long celebration of science and technology.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={cn("font-sans", inter.variable)}>
      <body className={`${font.className} bg-gray-50 dark:bg-zinc-950 antialiased`}>
        {/* <Providers> */}
        {children}
        <Toaster />
        {/* </Providers> */}
      </body>
    </html>
  )
}
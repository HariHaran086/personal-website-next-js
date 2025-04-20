import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FaHome } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { 
  chillax, 
  pilcrowRounded, 
  chillaxExtralight,
  chillaxLight,
  chillaxRegular,
  chillaxMedium,
  chillaxSemibold,
  chillaxBold,
  pilcrowRegular,
  pilcrowMedium,
  pilcrowSemibold,
  pilcrowBold,
  pilcrowHeavy
} from "@/fonts/fonts";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";
import { Analytics } from "@vercel/analytics/react"
<Analytics/>
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hariharan's portfolio",
  description: "A portfolio website showcasing my work and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} 
          ${geistMono.variable} 
          ${chillax.variable} 
          ${pilcrowRounded.variable} 
          ${chillaxExtralight.variable}
          ${chillaxLight.variable}
          ${chillaxRegular.variable}
          ${chillaxMedium.variable}
          ${chillaxSemibold.variable}
          ${chillaxBold.variable}
          ${pilcrowRegular.variable}
          ${pilcrowMedium.variable}
          ${pilcrowSemibold.variable}
          ${pilcrowBold.variable}
          ${pilcrowHeavy.variable}
          antialiased`}
      >
        <div className="fixed bottom-15 right-15 z-50 md:bottom-10 md:left-0 md:right-0 md:flex md:items-center md:justify-center md:rounded-tl-3xl md:rounded-tr-3xl md:p-4">
          <FloatingDock items={[
            {title: "Home", icon: <FaHome className="h-full w-full text-dark-blue dark:text-slate-300"/>, href: "#home"},
            {title: "Portfolio", icon: <FaSuitcase className="h-full w-full text-dark-blue dark:text-slate-300"/>, href: "#portfolio"},
            {title: "LinkedIn", icon: <FaLinkedin className="h-full w-full text-dark-blue dark:text-slate-300"/>, href: "https://www.linkedin.com/in/hariharanmanochrasa/"},
            {title: "Fiverr", icon: <TbBrandFiverr className="h-full w-full text-dark-blue dark:text-slate-300"/>, href: "https://www.fiverr.com/s/NND7QDR"}
          ]} 
            mobileClassName="fixed"
            desktopClassName="fixed"
          />
        </div>
        {children}
      </body>
    </html>
  );
}

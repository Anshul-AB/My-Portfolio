"use client";
import HeroSection from '@/app/components/sections/HeroSection';
import AboutSection from '@/app/components/sections/AboutSection';
import TechUsed from "@/app/components/sections/TechUsed";
import Projects from "@/app/components/sections/Projects";
import Contact from "@/app/components/sections/Contact";



export default function Home() {

  return (
    <div className="" >
      <HeroSection />
      <AboutSection />
      <TechUsed />
      <Projects />
      <Contact />
    </div>
  );
}

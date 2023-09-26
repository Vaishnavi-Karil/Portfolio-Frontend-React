"use client"
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Tools } from "@/components/Tools";

export default function Home() {
  return (
  <>
    <Hero/>
    <About/>
    <Skills/>
    <Tools/>
    <Experience/>
    <Projects/>
    <Contact/>
  </>
  )
}

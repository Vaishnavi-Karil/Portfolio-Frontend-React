"use client";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Tools } from "@/components/Tools";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [currentTab, setcurrentTab] = useState("Skills");
  return (
    <>
      <Hero />
      <About />
      <Skills currentTab={currentTab} setcurrentTab={setcurrentTab} />
      <Tools currentTab={currentTab} setcurrentTab={setcurrentTab} />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

"use client";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Tools } from "@/components/Tools";
import { StyledSkillsAndToolsContainer } from "@/styles/Styles";
import { useState } from "react";

export default function Home() {
  const [currentTab, setcurrentTab] = useState("Skills");
  return (
    <>
      <Hero />
      <About />
      <SkillsAndTools currentTab={currentTab} setcurrentTab={setcurrentTab} />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

const SkillsAndTools = ({ currentTab, setcurrentTab }) => {
  return (
    <StyledSkillsAndToolsContainer id="skills&tools">
      {currentTab === "Skills" && (
        <Skills currentTab={currentTab} setcurrentTab={setcurrentTab} />
      )}
      {currentTab === "Tools" && (
        <Tools currentTab={currentTab} setcurrentTab={setcurrentTab} />
      )}
    </StyledSkillsAndToolsContainer>
  );
};

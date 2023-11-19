import {
  AboutIcon,
  HomeIcon,
  ProjectIcon,
  SkillIcon,
  ContactIcon,
  ResumeIcon,
  ExperienceIcon,
} from "@/components/Icons";

export const route = [
  {
    id: "home",
    path: "/",
    icon: () => <HomeIcon />,
    text: "Home",
  },
  {
    id: "about",
    path: "/#about",
    icon: () => <AboutIcon />,
    text: "About",
  },
  {
    id: "skills&tools",
    icon: () => <SkillIcon />,
    path: "/#skills&tools",
    text: "Skills",
  },
  {
    id: "experience",
    icon: () => <ExperienceIcon />,
    path: "/#experience",
    text: "Experience",
  },
  {
    id: "projects",
    icon: () => <ProjectIcon />,
    path: "/#projects",
    text: "Projects",
  },
  {
    id: "contact",
    icon: () => <ContactIcon />,
    path: "/#contact",
    text: "Contact",
  },
];

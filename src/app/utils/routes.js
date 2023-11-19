import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Javascript, Work } from "@mui/icons-material";
export const route = [
  {
    id: "about",
    path: "/#about",
    icon: () => <Javascript />,
    text: "About",
  },
  {
    id: "skills&tools",
    icon: () => <Javascript />,
    path: "/#skills&tools",
    text: "Skills",
  },
  {
    id: "experience",
    icon: () => <Work />,
    path: "/#experience",
    text: "Experience",
  },
  {
    id: "projects",
    path: "/#projects",
    text: "Projects",
  },
  {
    id: "contact",
    path: "/#contact",
    text: "Contact",
  },
];

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import {
  FaBriefcase,
  FaCode,
  FaCodeBranch,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

// import { Javascript, Work } from "@mui/icons-material";
export const route = [
  {
    id: "about",
    path: "/#about",
    // icon: () => <Javascript />,
    icon: () => <FaUser />,
    text: "About",
  },
  {
    id: "skills&tools",
    // icon: () => <Javascript />,
    icon: () => <FaCode />,
    path: "/#skills&tools",
    text: "Skills",
  },
  {
    id: "experience",
    // icon: () => <Work />,
    icon: () => <FaBriefcase />,
    path: "/#experience",
    text: "Experience",
  },
  {
    id: "projects",
    icon: () => <FaCodeBranch />,
    path: "/#projects",
    text: "Projects",
  },
  {
    id: "contact",
    icon: () => <FaEnvelope />,
    path: "/#contact",
    text: "Contact",
  },
  {
    id: "resume",
    icon: () => <FaEnvelope />,
    path: "/resume",
    text: "Resume",
  },
];

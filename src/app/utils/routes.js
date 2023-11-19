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
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import {
  IoHomeOutline,
  IoBriefcaseOutline,
  IoGitBranchOutline,
} from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";

// import { Javascript, Work } from "@mui/icons-material";
export const route = [
  {
    id: "home",
    path: "/",
    // icon: () => <Javascript />,
    icon: () => <IoHomeOutline />,
    text: "Home",
  },
  {
    id: "about",
    path: "/#about",
    // icon: () => <Javascript />,
    icon: () => <AiOutlineUser />,
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
    icon: () => <IoBriefcaseOutline />,
    path: "/#experience",
    text: "Experience",
  },
  {
    id: "projects",
    icon: () => <IoGitBranchOutline />,
    path: "/#projects",
    text: "Projects",
  },
  {
    id: "contact",
    icon: () => <AiOutlineMail />,
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

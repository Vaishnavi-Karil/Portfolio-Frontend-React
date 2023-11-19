export const ArrayOfSkills = [
  {
    title: "Frontend Skills",
    skills: [
      {
        skillname: "Next.js",
        proficiency: "Experienced",
      },
      {
        skillname: "React",
        proficiency: "Experienced",
      },
      {
        skillname: "Redux",
        proficiency: "Experienced",
      },
      {
        skillname: "Javascript",
        proficiency: "Experienced",
      },
      {
        skillname: "ECMAScript",
        proficiency: "Experienced",
      },

      { skillname: "Material Ui", proficiency: "Experience" },
      {
        skillname: "Styled Component",
        proficiency: "Experienced",
      },
      {
        skillname: "API's Integration",
        proficiency: "Experienced",
      },
      {
        skillname: "HTML 5",
        proficiency: "Experienced",
      },
      {
        skillname: "CSS 3",
        proficiency: "Experienced",
      },
    ],
  },
  {
    title: "Backend Skills",
    skills: [
      {
        skillname: "REST API's",
        proficiency: "Experienced",
      },
      {
        skillname: "Node.js",
        proficiency: "Experienced",
      },
      {
        skillname: "Express",
        proficiency: "Experienced",
      },
      {
        skillname: "Mongoose ODM",
        proficiency: "Experienced",
      },
      {
        skillname: "MongoDB",
        proficiency: "Experienced",
      },
      {
        skillname: "JWT",
        proficiency: "Experienced",
      },
      {
        skillname: "Cors",
        proficiency: "Experienced",
      },
    ],
  },
];

export const ArrayOfTools = [
  {
    title: "Deploy & Host Tools",
    tools: [
      {
        toolname: "Git (Deploy)",
        proficiency: "Experienced",
      },
      {
        toolname: "Jira",
        proficiency: "Experienced",
      },
      {
        toolname: "Elastic Beanstalk (Host)",
        proficiency: "Experienced",
      },
      {
        toolname: "CI/CD",
        proficiency: "Experienced",
      },
      {
        toolname: "AWS Amplify (Host)",
        proficiency: "Experienced",
      },

      {
        toolname: "aws",
        proficiency: "Intermediate",
      },
      {
        toolname: "Vercel",
        proficiency: "Experienced",
      },
    ],
  },
  {
    title: "Developer Tools",
    tools: [
      {
        toolname: "React DevTools",
        proficiency: "Experienced",
      },
      {
        toolname: "Redux DevTools",
        proficiency: "Experienced",
      },
      {
        toolname: "Google Chrome",
        proficiency: "Experienced",
      },
      {
        toolname: "Postman",
        proficiency: "Experienced",
      },
      {
        toolname: "MongoDB Compass",
        proficiency: "Experienced",
      },
      {
        toolname: "MongoDB Shell",
        proficiency: "Experienced",
      },
    ],
  },
];

export const ArrayofExperiences = [
  {
    id: 1,
    companyname: "Cyber Information Technology Corporation",
    designation: "React Js Developer",
    startdate: "Feb 2021",
    enddate: "Present",
    experience: "freelance",
    projectdetails: {
      workingOnTotalProjects: 1,
      projects: [
        {
          plateform: "Next App",
          projectname: "DevShopify",
          workingTimeDuration: "Feb 2021 - Present",
          responsibility: [
            "Meet client requirements and ensure client satisfaction.",
            "Optimize application performance to meet client needs.",
            "Adhere to project deadlines and deliverables.",
            "Handle end-to-end UI development.",
          ],
          description: (designation, companyname, projectname) => {
            return `I'm working as an ${designation} for ${companyname} and my responsibility to handle and manage complete frontend development of ${projectname} from scratch using Next.js React Framework.I'm mention my responsibility to be handling at ${companyname}.`;
          },
          technologies: {
            frontendtechnologies: [
              "Next.js",
              "Material UI",
              "React Hooks",
              "Redux Toolkit",
              "Fetch API",
              "Redux Thunk",
              "MUI",
              "Styled Component",
              "Js",
              "ECMAScript",
            ],
            backendtechnologies: [
              "Node.js",
              "Express,JWT",
              "Mongoose",
              "MongoDB.",
            ],
            tools: [
              "ReactDevTools",
              "ReduxDevTools",
              "Google Chrome",
              "Postman",
              "Git",
              "GitHub",
              "Jira",
              "CI/CD",
              "AWS Amplify.",
            ],
          },
        },
      ],
    },
  },
  {
    id: 2,
    companyname: "Phixman",
    designation: "React Js Developer",
    startdate: "Mar 2022",
    enddate: "Jan 2023",
    experience: "full-time",
    projectdetails: {
      workingOnTotalProjects: 1,
      projects: [
        {
          id: "Admin Dashboard Panel",
          plateform: "React App",
          projectname: "Admin Dashboard Panel",
          projectduration: "Mar2022 - Jan2023",
          workingTimeDuration: "Mar2022 - Jan2023",
          responsibility: [],
          description: (designation, companyname, projectname) => {
            return `I'm working as an ${designation} at ${companyname} and my responsibility to handle and manage complete frontend development of ${projectname} from scratch using React.js Frontend JavaScript Library for building user interfaces based on components and I'm mention my responsibility to be handled at ${companyname}.`;
          },
          technologies: {
            frontendtechnologies: [
              "React.js",
              "Material Ui",
              "React Hooks",
              "JSX",
              "Redux Toolkit",
              "Fetch API",
              "Javascript",
              "ECMAScript",
              "CSS.",
            ],
            backendtechnologies: [],
            tools: [
              "ReactDevTools",
              "ReduxDevTools",
              "Google Chrome",
              "Postman",
              "Git",
              "Jira",
              "CI/CD",
              "AWS Amplify.",
            ],
          },
        },
      ],
    },
  },

  {
    id: 3,
    companyname: "Infobyd  Software Solutions",
    designation: "React Js Developer",
    startdate: "May 2021",
    enddate: "Mar 2022",
    experience: "full-time",
    projectdetails: {
      workingOnTotalProjects: 2,
      projects: [
        {
          id: "Stackholder",
          projectduration: "Sept 2021 - Mar 2022",
          plateform: "React App",
          projectname: "Stakeholder",
          workingTimeDuration: "Sept 2021 - Mar 2022",
          responsibility: [],
          description: (designation, companyname, responsibility) => {
            return `I worked as a ${designation} at ${companyname}. ${responsibility}. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi facere velit accusamus est voluptatum minus ducimus. Molestiae officia necessitatibus, possimus asperiores sed sunt sint adipisci ex consequuntur culpa eaque ut! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi facere velit accusamus est voluptatum minus ducimus. Molestiae officia necessitatibus.`;
          },
          technologies: {
            frontendtechnologies: [
              "React.js",
              "React Hooks",
              "Fetch API",
              "Material Ui",
              "JavaScript",
              "EcmaScript",
              "ReduxToolkit",
              "JSX",
              "CSS.",
            ],
            backendtechnologies: [],
            tools: [
              "ReactDevTools",
              "ReduxDevTools",
              "Google Chrome",
              "Postman.",
            ],
          },
        },
        {
          id: "Socket Connection with Genesys Cloud",
          projectduration: "May2021 - Aug2021",
          plateform: "Node App",
          projectname: "Socket Connection with Genesys Cloud",
          workingTimeDuration: "May2021 - Aug2021",
          responsibility: [],
          description: (designation, companyname, responsibility) => {
            return `I worked as a ${designation} at ${companyname}. ${responsibility} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi facere velit accusamus est voluptatum minus ducimus. Molestiae officia necessitatibus, possimus asperiores sed sunt sint adipisci ex consequuntur culpa eaque ut!.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi facere velit accusamus est voluptatum minus ducimus. Molestiae officia necessitatibus.`;
          },
          technologies: {
            frontendtechnologies: [],
            backendtechnologies: [
              "Javascript",
              "ES6",
              "Node.js",
              "Express",
              "Mongoose ODM",
              "MongoDB",
              "Cors",
              "Fetch API.",
            ],
            tools: ["Postman"],
          },
        },
      ],
    },
  },
  {
    id: 4,
    companyname: "Asparrow Tech",
    designation: "React Intern",
    startdate: "Dec 2020",
    enddate: "April 2022",
    experience: "Intenship",
    projectdetails: {
      workingOnTotalProjects: 2,
      projects: [
        {
          id: "Todo Application - demo-app",
          projectduration: "March 2020 - March 2022 (demo-app)",
          plateform: "React App",
          projectname: "Todo Application",
          workingTimeDuration: "10 days (demo-app)",
          responsibility: [],
          description: (designation, companyname, responsibility) => {
            return `I worked as a ${designation} at ${companyname}. ${responsibility}. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi facere velit accusamus est voluptatum minus ducimus. Molestiae officia necessitatibus, possimus asperiores sed sunt sint adipisci ex consequuntur culpa eaque ut! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi facere velit accusamus est voluptatum minus ducimus. Molestiae officia necessitatibus.`;
          },
          technologies: {
            frontendtechnologies: [
              "React.js",
              "React Hooks",
              "Fetch API",
              "Material Ui",
              "JavaScript",
              "EcmaScript",
              "ReduxToolkit",
              "JSX",
              "CSS.",
            ],
            backendtechnologies: [],
            tools: [
              "ReactDevTools",
              "ReduxDevTools",
              "Google Chrome",
              "Postman.",
            ],
          },
        },
        {
          id: "ERM",
          projectduration: "April 2021 - April 2021 (live-app)",
          plateform: "React App",
          projectname: "Employ Relationship Managment",
          workingTimeDuration: "April 2021 - April 2021 (live-app)",
          responsibility: [],
          description: (designation, companyname, responsibility) => {
            return `I worked as a ${designation} at ${companyname}. ${responsibility} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi facere velit accusamus est voluptatum minus ducimus. Molestiae officia necessitatibus, possimus asperiores sed sunt sint adipisci ex consequuntur culpa eaque ut!.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi facere velit accusamus est voluptatum minus ducimus. Molestiae officia necessitatibus.`;
          },
          technologies: {
            frontendtechnologies: [
              "React.js",
              "React Hooks",
              "Fetch API",
              "Material Ui",
              "JavaScript",
              "EcmaScript",
              "ReduxToolkit",
              "JSX",
              "CSS.",
            ],
            backendtechnologies: [ ],
            tools: ["Postman"],
          },
        },
      ],
    },
  },
];

// Elastic Beanstalk
// Aws Amplify
// Jest
// Docker
// Redux Toolkit
// Redux Thunk
// Next 13
// React Hooks

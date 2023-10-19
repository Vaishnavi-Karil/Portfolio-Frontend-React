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
    experience: "total experience",
    projectdetails: {
      workingOnTotalProjects: 1,
      projects: [
        {
          plateform: "Next App",
          projectname: "DevShopify",
          workingTimeDuration: "Feb 2021 - Present",
          responsibility: [],
          description: (designation, companyname, projectname) => {
            return `I'm working as an ${designation} for ${companyname} and my responsibility to handle and manage complete frontend development of ${projectname} from scratch using Next.js React Framework.I'm mention my responsibility to be handling at ${companyname}.`;
          },
          technologies: {
            frontendtechnologies: ["React Hooks", "Redux Toolkit", "fetch", "Javascript", "ECMAScript", "Mui", "JSX", "Css"],
            backendtechnologies: [ ],
            tools: [
              "Git",
              "Jira",
              "CI/CD",
              "AWS Amplify",
              "Vercel",
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
    experience: "total experience",

    projectdetails: {
      workingOnTotalProjects: 1,
      projects: [
        {
          id: "Admin Dashboard Panel",
          plateform: "React App",
          projectname: "Admin Dashboard Panel",
          projectduration: "Feb 2021 - Present",
          workingTimeDuration: "Feb 2021 - Present",
          responsibility: [],
          description: (designation, companyname, projectname) => {
            return `I'm working as an ${designation} at ${companyname} and my responsibility to handle and manage complete frontend development of ${projectname} from scratch using React.js Frontend JavaScript Library for building user interfaces based on components and I'm mention my responsibility to be handled at ${companyname}.`;
          },
          technologies: {
            frontendtechnologies: ["React"],
            backendtechnologies: [ ],
            tools: [
              "ReactDevTools",
              "ReduxDevTools",
              "Google Chrome",
              "Postman",
              "Git",
              "Jira",
              "CI/CD",
              "AWS Amplify",             
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
    experience: "total experience",
    projectdetails: {
      workingOnTotalProjects: 2,
      projects: [
        {
          id: "Stackholder",
          projectduration: "Feb 2021 - Present",
          plateform: "React App",
          projectname: "Stakeholder",
          workingTimeDuration: "Feb 2021 - Present",
          responsibility: [],
          description: (designation, companyname, responsibility) => {
            return `I worked as a ${designation} at ${companyname}. ${responsibility}`;
          },
          technologies: {
            frontendtechnologies: [
              "React Hooks",
              "Fetch Api's",
              "Material Ui",
              "JavaScript",
              "EcmaScript",
              "ReduxToolkit",
              "JSX", 
              "CSS"
            ],
            backendtechnologies: [ ],
            tools: [
              "ReactDevTools",
              "ReduxDevTools",
              "Google Chrome",
              "Postman",
            ],
          },
        },
        {
          id: "Socket Connection with Genesys Cloud",
          projectduration: "May 2021 - Aug 2021",
          plateform: "Node App",
          projectname: "Socket Connection with Genesys Cloud",
          workingTimeDuration: "Feb 2021 - Present",
          responsibility: [],
          description: (designation, companyname, responsibility) => {
            return `I worked as a ${designation} at ${companyname}. ${responsibility}`;
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
              "fetch Api's",
            ],
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
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
        proficiency:  "Experienced",
      },
      {
        toolname: "CI/CD",
        proficiency: "Experienced",
      },
      {
        toolname: "AWS Amplify (Host)",
        proficiency:  "Experienced",
      },

      {
        toolname: "aws",
        proficiency: "Intermediate",
      },
      {
        toolname: "Vercel",
        proficiency:  "Experienced",
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
    companyname : "Cyber Information Technology Corporation", 
    designation : "Full Stack Developer", 
    startdate : "Feb 2021", 
    enddate : "Present", 
    experience : 'total experience', 
    responsibility : 'Responsible for the development of the website and the backend of the application.', 
    description : (designation, companyname,responsibility) => {
      return `I worked as a ${designation} at ${companyname}. ${responsibility}`
    },
    plateform : "Web Application", 
    projectname : ["DevShopify"],
    workingOnTotalProjects : 1,
    technologies : {
      frontendtechnologies: ["React"], 
      backendtechnologies: ["Node.js", "Express", "Mongoose ODM", "MongoDB", "JWT", "Cors"], 
      tools: ["Git", "Jira", "Elastic Beanstalk", "CI/CD", "AWS Amplify", "aws", "Vercel", "MongoDBCompass", "MongoDB", "MongoDBShell"],
    }
  }, 
  {
    companyname : "Phixman", 
    designation : "React Frontend Developer", 
    startdate : "Mar 2022", 
    enddate : "Jan 2023", 
    experience : "total experience",
    responsibility : 'Responsible for the development of the website and the backend of the application.', 
    description : (designation, companyname, responsibility) => {
      return `I worked as a ${designation} at ${companyname}. ${responsibility}`
    },
    plateform : "Web Application", 
    projectname : ["Phixman Admin Dashboard"],
    workingOnTotalProjects : 1,
    technologies : {
      frontendtechnologies: ["React","Redux", "Material Ui", "JavaScript", "EcmaScript", "Html", "Css", "Moduler CSS"], 
      backendtechnologies: ["Node.js", "Express", "Mongoose ODM", "MongoDB", "JWT", "Cors"], 
      tools: ["ReactDevTools", "ReduxDevTools", "Google Chrome", "Postman", ]
    },
  }, 
  {
    companyname : "Infobyd  Software Solutions", 
    designation : "React Frontend Developer", 
    startdate : "May 2021", 
    enddate : "Mar 2022", 
    experience : "total experience",
    responsibility : 'Responsible for the development of the website and the backend of the application.', 
    description : (designation, companyname, responsibility) => {
      return `I worked as a ${designation} at ${companyname}. ${responsibility}`
    },
    plateform : "Web Application", 
    projectname : ["Stakeholder React App", "Socket Connection with Genesys Cloud"],
    workingOnTotalProjects : 2,
    technologies : {
      frontendtechnologies: ["React","Redux", "Material Ui", "JavaScript", "EcmaScript", "Html", "Css", "Moduler CSS"], 
      backendtechnologies: ["Node.js", "Express", "Mongoose ODM", "MongoDB", "JWT", "Cors"], 
      tools: ["ReactDevTools", "ReduxDevTools", "Google Chrome", "Postman", ]
    },
  }, 
  {
    companyname : "Asparrow Tech", 
    designation : "Software Trainee", 
    startdate : "Dec 2020", 
    enddate : "April 2020", 
    experience : "total experience",
    responsibility : 'Responsible for the development of the website and the backend of the application.', 
    description : (designation, companyname, responsibility) => {
      return `I worked as a ${designation} at ${companyname}. ${responsibility}`
    },
    plateform : "Web Application", 
    projectname : ["React Intenship"],
    workingOnTotalProjects : 0,
    technologies : {
      frontendtechnologies: ["React","Redux", "Material Ui", "JavaScript", "EcmaScript", "Html", "Css", "Moduler CSS"], 
      backendtechnologies: ["Node.js", "Express", "Mongoose ODM", "MongoDB", "JWT", "Cors"], 
      tools: ["ReactDevTools", "ReduxDevTools", "Google Chrome", "Postman", ]
    },
  }, 
]
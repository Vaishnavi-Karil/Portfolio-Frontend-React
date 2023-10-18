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
    companyname : "Cyber Information Technology Corporation", 
    designation : "React Js Developer", 
    startdate : "Feb 2021", 
    enddate : "Present", 
    experience : 'total experience', 
    responsibility : [], 
    plateform : "Next App", 
    projectname : ["DevShopify"],
    workingOnTotalProjects : 1,
    description : (designation, companyname, projectname) => {
      return `I'm working as an ${designation} for ${companyname} and my responsibility to handle and manage complete frontend development of ${projectname} from scratch using Next.js React Framework.I'm mention my responsibility to be handling at ${companyname}.`
    },
    technologies : {
      frontendtechnologies: ["React"], 
      backendtechnologies: ["Node.js", "Express", "Mongoose ODM", "MongoDB", "JWT", "Cors"], 
      tools: ["Git", "Jira", "Elastic Beanstalk", "CI/CD", "AWS Amplify", "aws", "Vercel", "MongoDBCompass", "MongoDB", "MongoDBShell"],
    }
  }, 
  {
    companyname: "Phixman",
    designation: "React Js Developer", 
    startdate: "Mar 2022",
    enddate: "Jan 2023",
    experience: "total experience",
    responsibility: [],
    projectname: "Admin Dashboard Panel",
    plateform: 'React App',
    description: (designation, companyname, projectname) => {
      return `I'm working as an ${designation} at ${companyname} and my responsibility to handle and manage complete frontend development of ${projectname} from scratch using React.js Frontend JavaScript Library for building user interfaces based on components and I'm mention my responsibility to be handled at ${companyname}.`;
    },  
  },
  
  {
    companyname : "Infobyd  Software Solutions", 
    designation : "React Js Developer", 
    startdate : "May 2021", 
    enddate : "Mar 2022", 
    experience : "total experience",
    responsibility : [], 
    description : (designation, companyname, responsibility) => {
      return `I worked as a ${designation} at ${companyname}. ${responsibility}`
    },
    plateform : "React App", 
    projectname : ["Stakeholder React App"],
    workingOnTotalProjects : 2,
    technologies : {
      frontendtechnologies: ["React","Redux", "Material Ui", "JavaScript", "EcmaScript", "Local Storage", "Local Storage", "Fetch Api's", "React Hooks", "Regular Expresssions"], 
      backendtechnologies: ["Node.js", "Express", "Mongoose ODM", "MongoDB","Cors", "fetch Api's"], 
      tools: ["ReactDevTools", "ReduxDevTools", "Google Chrome", "Postman", ]
    },
  }, 
];

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
    companyname: "Phixman",
    designation: "React Js Developer", 
    startdate: "Mar 2022",
    enddate: "Jan 2023",
    experience: "total experience",
    responsibility: [],
    projectname: "Admin Dashboard Panel",
    description: (designation, companyname, projectname) => {
      return `I worked as an ${designation} to handle complete frontend of ${projectname}  of  ${companyname}.`;
    },
  },
];

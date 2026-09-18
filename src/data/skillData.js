
const skillData = [
  {
    id: 1,
    skill: "SQL",
    category: "Data Analytics",
    level: "Beginner",
    description:
      "Learn how to query, filter, join, and analyze data using SQL.",
    prerequisites: [],
    nextSkills: ["Excel", "Power BI", "Python"],
  },
  {
    id: 2,
    skill: "Excel",
    category: "Data Analytics",
    level: "Beginner",
    description:
      "Learn formulas, pivot tables, data cleaning, and analysis in Excel.",
    prerequisites: [],
    nextSkills: ["SQL", "Power BI", "Statistics"],
  },
  {
    id: 3,
    skill: "Power BI",
    category: "Data Visualization",
    level: "Intermediate",
    description:
      "Create interactive dashboards, reports, visualizations, and business insights.",
    prerequisites: ["Excel"],
    nextSkills: ["DAX", "Data Modeling", "Business Analysis"],
  },
  {
    id: 4,
    skill: "Python",
    category: "Programming",
    level: "Intermediate",
    description:
      "Use Python for data analysis, automation, data cleaning, and visualization.",
    prerequisites: ["SQL"],
    nextSkills: ["Pandas", "NumPy", "Data Visualization"],
  },
  {
    id: 5,
    skill: "Statistics",
    category: "Data Analytics",
    level: "Intermediate",
    description:
      "Understand descriptive statistics, probability, distributions, and analytical concepts.",
    prerequisites: ["Excel"],
    nextSkills: ["Data Analysis", "Machine Learning"],
  },
  {
    id: 6,
    skill: "Data Cleaning",
    category: "Data Analytics",
    level: "Intermediate",
    description:
      "Learn how to identify missing, duplicate, inconsistent, and incorrect data.",
    prerequisites: ["Excel", "SQL"],
    nextSkills: ["Data Analysis", "Python"],
  },
  {
    id: 7,
    skill: "Data Visualization",
    category: "Data Analytics",
    level: "Intermediate",
    description:
      "Learn how to communicate data insights through effective charts and dashboards.",
    prerequisites: ["Excel", "Power BI"],
    nextSkills: ["Business Analysis", "Power BI"],
  },
  {
    id: 8,
    skill: "Business Analysis",
    category: "Business",
    level: "Intermediate",
    description:
      "Learn requirements gathering, process analysis, documentation, and business improvement.",
    prerequisites: ["Data Analysis"],
    nextSkills: ["Requirements Gathering", "Process Analysis"],
  },
];

export default skillData;
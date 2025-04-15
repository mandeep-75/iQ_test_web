export const examDetails = {
  SAT: {
    description:
      "The SAT is a standardized test widely used for college admissions in the United States.",
    history:
      "First introduced in 1926, the SAT has undergone various revisions.",
    recommendedTests: [
      {
        title: "SAT Math",
        route: "sat-math",
        description: "Covers algebra, geometry, and problem-solving.",
      },
      {
        title: "SAT Reading",
        route: "sat-reading",
        description: "Critical reading and evidence-based comprehension.",
      },
    ],
  },
  GRE: {
    description:
      "The GRE is a standardized test for graduate school admissions.",
    history:
      "Administered by ETS, it assesses verbal, quantitative, and analytical writing skills.",
    recommendedTests: [
      {
        title: "GRE Quantitative",
        route: "gre-quant",
        description: "Math-focused, data interpretation and algebra.",
      },
      {
        title: "GRE Verbal",
        route: "gre-verbal",
        description: "Vocabulary, reading comprehension, and reasoning.",
      },
    ],
  },
  NEET: {
    description: "The NEET is an entrance exam for medical courses in India.",
    history:
      "It replaced all other medical entrance exams in India starting from 2013.",
    recommendedTests: [
      {
        title: "NEET Biology",
        route: "neet-bio",
        description: "Botany and zoology concepts.",
      },
      {
        title: "NEET Chemistry",
        route: "neet-chem",
        description: "Organic, inorganic, and physical chemistry.",
      },
    ],
  },
  JEE: {
    description:
      "Joint Entrance Examination for engineering aspirants in India.",
    history: "It is conducted in two phases: JEE Main and JEE Advanced.",
    recommendedTests: [
      {
        title: "JEE Physics",
        route: "jee-physics",
        description: "Conceptual and numerical problems in physics.",
      },
      {
        title: "JEE Math",
        route: "jee-math",
        description: "Advanced algebra, calculus, and more.",
      },
    ],
  },
};

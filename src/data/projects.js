// Edit this array to add your own projects. Cards are rendered with .map().
// Put screenshots in /public/projects and point `image` to them.
const GITHUB = "https://github.com/sobuzytp/";

export const projects = [
  {
    id: "taskly",
    image: "/projects/taskly.svg",
    tech: ["React", "JavaScript", "CSS", "Django", "PostgreSQL", "REST API"],
    demo: "https://student-task-manager.serveo.net",
    github: "https://github.com/sobuzytp/student-task-manager",
  },
  {
    id: "blood-sync",
    image: "/projects/weather.svg",
    tech: ["React", "JavaScript", "Django", "PostgreSQL", "REST API"],
    demo: "https://blood-sync.serveo.net",
    github: "https://github.com/sobuzytp/blood_sync",
  },
  {
    id: "bank-management",
    image: "/projects/landing.svg",
    tech: ["React", "JavaScript", "Django", "PostgreSQL", "REST API", "HTML", "CSS"],
    demo: "https://bank-management-system.serveo.net",
    github: "https://github.com/sobuzytp/bank-management-system",
  },
  {
    id: "mini-ecommerce",
    image: "/projects/quiz.svg",
    tech: ["React", "JavaScript", "Django", "PostgreSQL", "REST API", "CSS"],
    demo: "https://mini-ecommerce-api.serveo.net",
    github: "https://github.com/sobuzytp/mini-ecommerce-api/tree/main/mini_ecommerce",
  },
];

export const filterOptions = ["React", "JavaScript", "Django", "PostgreSQL", "REST API", "HTML", "CSS"];

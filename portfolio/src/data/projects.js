// Edit this array to add your own projects. Cards are rendered with .map().
// Put screenshots in /public/projects and point `image` to them.
const GITHUB = "https://github.com/sobuzytp";

export const projects = [
  {
    id: "taskly",
    image: "/projects/taskly.svg",
    tech: ["React", "JavaScript", "CSS"],
    demo: "#",
    github: GITHUB,
  },
  {
    id: "weather",
    image: "/projects/weather.svg",
    tech: ["React", "JavaScript", "API"],
    demo: "#",
    github: GITHUB,
  },
  {
    id: "landing",
    image: "/projects/landing.svg",
    tech: ["HTML", "CSS"],
    demo: "#",
    github: GITHUB,
  },
  {
    id: "quiz",
    image: "/projects/quiz.svg",
    tech: ["JavaScript", "CSS"],
    demo: "#",
    github: GITHUB,
  },
];

export const filterOptions = ["React", "JavaScript", "CSS"];

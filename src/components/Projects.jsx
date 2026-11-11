import { useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { projects, filterOptions } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const { t } = useSettings();
  const [filter, setFilter] = useState("all");

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section__title">{t.projects.title}</h2>
        <p className="section__subtitle">{t.projects.subtitle}</p>

        <div className="filters" role="group" aria-label={t.projects.subtitle}>
          {["all", ...filterOptions].map((option) => (
            <button
              key={option}
              className={`chip ${filter === option ? "is-active" : ""}`}
              onClick={() => setFilter(option)}
              aria-pressed={filter === option}
            >
              {option === "all" ? t.projects.all : option}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="empty">{t.projects.empty}</p>
        ) : (
          <div className="projects__grid">
            {visible.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;

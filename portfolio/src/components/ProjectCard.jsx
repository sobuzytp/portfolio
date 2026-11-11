import { useSettings } from "../context/SettingsContext";

function ProjectCard({ project }) {
  const { t } = useSettings();
  const text = t.projects.items[project.id];

  return (
    <article className="card project">
      <img className="project__img" src={project.image} alt={text.title} loading="lazy" />
      <div className="project__body">
        <h3>{text.title}</h3>
        <p>{text.description}</p>
        <ul className="badges">
          {project.tech.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <div className="project__buttons">
          <a className="btn btn--primary btn--sm" href={project.demo} target="_blank" rel="noreferrer">
            {t.projects.demo}
          </a>
          <a className="btn btn--ghost btn--sm" href={project.github} target="_blank" rel="noreferrer">
            {t.projects.github}
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;

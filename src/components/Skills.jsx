import { useSettings } from "../context/SettingsContext";
import { skills } from "../data/skills";

function Skills() {
  const { t } = useSettings();

  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <h2 className="section__title">{t.skills.title}</h2>
        <p className="section__subtitle">{t.skills.subtitle}</p>
        <div className="skills__grid">
          {skills.map((skill) => (
            <div key={skill.name} className="card skill">
              <div className="skill__head">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill__bar" role="progressbar" aria-valuenow={skill.level} aria-valuemin="0" aria-valuemax="100" aria-label={skill.name}>
                <div className="skill__fill" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

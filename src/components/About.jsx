import { useSettings } from "../context/SettingsContext";

function About() {
  const { t } = useSettings();
  const a = t.about;

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section__title">{a.title}</h2>
        <div className="about__grid">
          <div>
            <p className="about__text">{a.text}</p>

            <h3 className="about__sub">{a.eduTitle}</h3>
            <ul className="timeline">
              {a.education.map((item) => (
                <li key={item.place}>
                  <strong>{item.place}</strong>
                  <span>{item.detail}</span>
                </li>
              ))}
            </ul>

            <h3 className="about__sub">{a.goalTitle}</h3>
            <p className="about__text">{a.goal}</p>
          </div>

          <aside className="card profile-card">
            <h3 className="about__sub about__sub--first">{a.infoTitle}</h3>
            <dl>
              {a.info.map(([label, value]) => (
                <div key={label} className="profile-card__row">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default About;

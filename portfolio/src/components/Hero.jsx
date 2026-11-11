import { useSettings } from "../context/SettingsContext";
import useTyping from "../hooks/useTyping";

function Hero() {
  const { t } = useSettings();
  const typed = useTyping(t.hero.roles);

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="hero__hello">{t.hero.hello}</p>
          <h1 className="hero__name">{t.hero.name}</h1>
          <p className="hero__role" aria-live="off">
            {typed}
            <span className="caret" aria-hidden="true" />
          </p>
          <p className="hero__intro">{t.hero.intro}</p>
          <div className="hero__buttons">
            <a className="btn btn--primary" href="/Shaharul_Islam_CV.pdf" download>
              {t.hero.cv}
            </a>
            <a className="btn btn--ghost" href="#projects">
              {t.hero.projects}
            </a>
          </div>
          <p className="hero__place">{t.hero.location}</p>
        </div>

        <div className="hero__photo">
          <div className="hero__sun" aria-hidden="true" />
          <img src="/profile.png" alt="Shaharul Islam" width="400" height="400" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

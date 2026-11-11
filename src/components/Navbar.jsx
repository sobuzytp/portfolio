import { useState } from "react";
import { useSettings } from "../context/SettingsContext";
import { SunIcon, MoonIcon } from "./Icons";

const sections = ["home", "about", "skills", "projects", "contact"];

function Navbar({ active }) {
  const { t, theme, lang, toggleTheme, toggleLang } = useSettings();
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__sun" aria-hidden="true" />
          {t.brand}
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`} aria-label="Main">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "is-active" : ""}
              onClick={() => setOpen(false)}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button className="pill-btn" onClick={toggleLang} aria-label={t.aria.lang}>
            {lang === "bn" ? "EN" : "বাং"}
          </button>
          <button className="pill-btn" onClick={toggleTheme} aria-label={t.aria.theme}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="pill-btn navbar__burger"
            onClick={() => setOpen((o) => !o)}
            aria-label={t.aria.menu}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

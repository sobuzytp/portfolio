import { useSettings } from "../context/SettingsContext";
import { links } from "../data/links";
import { GitHubIcon, LinkedInIcon, FacebookIcon } from "./Icons";

function Footer() {
  const { t } = useSettings();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong className="footer__name">{t.hero.name}</strong>
          <p>
            © {year} {t.hero.name}. {t.footer.rights}
          </p>
        </div>
        <div className="socials">
          <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={links.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

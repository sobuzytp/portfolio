import { useEffect, useState } from "react";
import { useSettings } from "../context/SettingsContext";

function ScrollToTop() {
  const { t } = useSettings();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.aria.top}
    >
      ↑
    </button>
  );
}

export default ScrollToTop;

import { useState } from "react";
import { useScrolled } from "../hooks";
import styles from "./Navbar.module.css";

const links = ["About", "Skills", "Projects", "Education", "Contact"];

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [open, setOpen] = useState(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        SSS<span className={styles.dot}>.</span>
      </div>

      {/* Desktop links */}
      <div className={styles.links}>
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className={styles.link}>
            {l}
          </a>
        ))}
      </div>

      {/* Mobile toggle */}
      <button className={styles.toggle} onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <span className={`${styles.bar} ${open ? styles.bar1open : ""}`} />
        <span className={`${styles.bar} ${open ? styles.bar2open : ""}`} />
        <span className={`${styles.bar} ${open ? styles.bar3open : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

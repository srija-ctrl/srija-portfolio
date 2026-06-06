import { useEffect } from "react";
import styles from "./Modal.module.css";

export default function Modal({ project, onClose }) {
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", fn);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose} aria-label="Close">×</button>

        <div className={styles.header}>
          <div className={styles.badges}>
            <span className={styles.catBadge}>{project.cat}</span>
            <span className={styles.dateBadge}>{project.date}</span>
          </div>
          <h2 className={styles.title}>{project.title}</h2>
        </div>

        <div className={styles.body}>
          {[
            ["The Problem", project.problem],
            ["The Solution", project.solution],
            ["What I Learned", project.learning],
          ].map(([h, t]) => (
            <div key={h} className={styles.block}>
              <h4 className={styles.blockLabel}>{h}</h4>
              <p className={styles.blockText}>{t}</p>
            </div>
          ))}

          <div>
            <h4 className={styles.blockLabel}>Key Features</h4>
            <div className={styles.features}>
              {project.features.map((f) => (
                <div key={f} className={styles.feature}>
                  <span className={styles.featureDot}>◆</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className={styles.blockLabel}>Tech Stack</h4>
            <div className={styles.tags}>
              {project.tags.map((t) => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

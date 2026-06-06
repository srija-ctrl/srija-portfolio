import { useState, useEffect } from "react";
import { useTyping } from "../hooks";
import StatCounter from "./StatCounter";
import PHOTO from "../photo";
import { roles } from "../data";
import styles from "./Hero.module.css";

export default function Hero() {
  const typed = useTyping(roles);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={styles.hero}>
      {/* TEXT */}
      <div className={`${styles.text} ${visible ? styles.textVisible : ""}`}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          <span>Available for opportunities</span>
        </div>

        <h1 className={styles.h1}>
          <span className={styles.hello}>Hello, I'm</span>
          <em className={styles.firstName}>Sanaka</em>
          <br />
          <span className={styles.lastName}>Sai Srija</span>
        </h1>

        <div className={styles.typed}>
          <span className={styles.dash}>—</span>
          <span className={styles.typedText}>{typed}</span>
          <span className={styles.cursor}>|</span>
        </div>

        <p className={styles.bio}>
          Building intelligent systems at the intersection of machine learning,
          deep learning, and human-centred design — one model at a time.
        </p>

        <div className={styles.cta}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnOutline}>Get in Touch</a>
        </div>

        <div className={styles.stats}>
          <StatCounter num="3+" label="AI / ML Projects" delay={0.2} />
          <StatCounter num="2"  label="Leadership Roles"  delay={0.3} />
          <StatCounter num="∞"  label="Problems to Solve" delay={0.4} />
        </div>
      </div>

      {/* IMAGE */}
      <div className={`${styles.imageWrap} ${visible ? styles.imageVisible : ""}`}>
        <div className={styles.frame}>
          <div className={styles.outerBorder} />
          <div className={styles.innerBorder} />
          <div className={styles.cornerBR} />
          <div className={styles.cornerTL} />
          <img src={PHOTO} alt="Sanaka Sai Srija" className={styles.photo} />
          <div className={styles.photoOverlay} />
          <div className={styles.nameCard}>
            <div>
              <p className={styles.nameCardName}>Sai Srija</p>
              <p className={styles.nameCardSub}>AI & ML · Hyderabad</p>
            </div>
            <span className={styles.online} />
          </div>
        </div>
      </div>
    </section>
  );
}

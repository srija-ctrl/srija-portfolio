import { useState } from "react";
import Reveal from "./Reveal";
import StatCounter from "./StatCounter";
import { useReveal } from "../hooks";
import { skills, projects, education, certifications, activities } from "../data";

/* ─── shared helpers ─── */
const SectionLabel = ({ children }) => (
  <p style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(244,184,200,0.6)", marginBottom: "0.7rem" }}>
    {children}
  </p>
);
const SectionTitle = ({ children, style = {} }) => (
  <h2 style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 300, color: "#f7f3f0", marginBottom: "3rem", ...style }}>
    {children}
  </h2>
);
const Tag = ({ children }) => (
  <span style={{ background: "rgba(244,184,200,0.06)", border: "1px solid rgba(244,184,200,0.14)", color: "rgba(247,243,240,0.58)", padding: "0.22rem 0.65rem", fontSize: "0.7rem", borderRadius: 2 }}>
    {children}
  </span>
);

/* ─── ABOUT ─── */
export function About() {
  return (
    <section id="about" style={{ padding: "7rem 2rem", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.7fr", gap: "6rem", alignItems: "start" }}>
        <Reveal>
          <SectionLabel>Who I am</SectionLabel>
          <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(2.4rem,4vw,3.5rem)", fontWeight: 300, lineHeight: 1.08, color: "#f7f3f0", marginBottom: "1rem" }}>
            Curious.<br /><em style={{ color: "#f4b8c8", fontStyle: "italic" }}>Driven.</em><br />Building.
          </h2>
          <div style={{ width: 40, height: 1, background: "rgba(244,184,200,0.3)", margin: "1.5rem 0 2.5rem" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <StatCounter num="3+" label="AI / ML Projects"  delay={0.1} />
            <StatCounter num="2"  label="Leadership Roles"  delay={0.2} />
            <StatCounter num="∞"  label="Problems to Solve" delay={0.3} />
          </div>
        </Reveal>

        <div>
          {[
            "There's something deeply compelling about teaching machines to understand the world. For me, AI isn't just a field of study — it's the lens through which I see possibility in every messy, unsolved problem.",
            "I'm a Computer Science student specialising in Artificial Intelligence and Machine Learning at GITAM University, Hyderabad. My journey has taken me from building gesture-based control systems with OpenCV to designing voice-driven AI agents that speak multiple languages.",
            "Beyond the code, I lead as Vice President of Enigma, our AI & DS club, where I help cultivate a community of builders and thinkers. The most powerful ideas emerge at the intersection of technical depth and collaborative energy.",
          ].map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p style={{ fontSize: "0.97rem", color: "rgba(247,243,240,0.62)", lineHeight: 1.92, marginBottom: "1.5rem" }}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div style={{ borderLeft: "2px solid rgba(244,184,200,0.3)", paddingLeft: "1.4rem", marginTop: "2rem" }}>
              <p style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "1.2rem", fontStyle: "italic", color: "#f4b8c8", lineHeight: 1.65 }}>
                I'm drawn to problems where intelligence — artificial or otherwise — can make life genuinely better.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── SKILL CARD ─── */
function SkillCard({ s, i }) {
  const [hov, setHov] = useState(false);
  const [ref, vis] = useReveal();
  const [filled, setFilled] = useState(0);

  // animate bar when visible
  useState(() => {});
  // use useEffect via inline workaround — handled in parent, see below
  return (
    <SkillCardInner s={s} i={i} />
  );
}

function SkillCardInner({ s, i }) {
  const [hov, setHov] = useState(false);
  const [ref, vis] = useReveal();
  const [filled, setFilled] = useState(0);

  // Animate progress bar when revealed
  if (vis && filled < s.level) {
    // triggers via microtask
  }

  // use a simple approach with CSS transition
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? (hov ? "translateY(-4px)" : "none") : "translateY(28px)",
        transition: `opacity 0.7s ease ${i * 0.08}s, transform 0.7s ease ${i * 0.08}s`,
        background: hov ? "#181818" : "#141414",
        border: `1px solid ${hov ? "rgba(244,184,200,0.3)" : "rgba(244,184,200,0.1)"}`,
        padding: "1.8rem",
        borderRadius: 4,
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        boxShadow: hov ? "0 16px 40px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,#f4b8c8,transparent)", opacity: hov ? 1 : 0, transition: "opacity 0.4s" }} />
      <div style={{ fontSize: "1.4rem", marginBottom: "0.9rem" }}>{s.icon}</div>
      <p style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#f4b8c8", marginBottom: "0.4rem" }}>{s.cat}</p>
      <p style={{ fontSize: "1rem", color: "#f7f3f0", marginBottom: "1rem", fontWeight: 400 }}>{s.name}</p>
      <div style={{ height: 2, background: "rgba(244,184,200,0.08)", borderRadius: 1, marginBottom: "1rem", overflow: "hidden" }}>
        <div style={{ height: "100%", width: vis ? `${s.level}%` : "0%", background: "linear-gradient(90deg, rgba(244,184,200,0.4), #f4b8c8)", borderRadius: 1, transition: `width 1.2s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s` }} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
        {s.tags.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  );
}

/* ─── SKILLS ─── */
export function Skills() {
  return (
    <section id="skills" style={{ padding: "7rem 2rem", background: "#0d0d0d", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><SectionLabel>What I work with</SectionLabel></Reveal>
        <Reveal delay={0.07}><SectionTitle>Skills &amp; Technologies</SectionTitle></Reveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.2rem" }}>
          {skills.map((s, i) => <SkillCardInner key={s.name} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECT CARD ─── */
function ProjectCard({ p, onClick, i }) {
  const [hov, setHov] = useState(false);
  const [ref, vis] = useReveal();

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? (hov ? "translateY(-6px)" : "none") : "translateY(28px)",
        transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.4s ease`,
        background: hov ? "#141414" : "#111",
        border: `1px solid ${hov ? "rgba(244,184,200,0.35)" : p.featured ? "rgba(244,184,200,0.2)" : "rgba(244,184,200,0.1)"}`,
        borderRadius: 4,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: hov ? "0 24px 48px rgba(0,0,0,0.5)" : "none",
        position: "relative",
      }}
    >
      {p.featured && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(244,184,200,0.55),transparent)" }} />
      )}
      <div style={{ padding: "2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.2rem" }}>
          <span style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "0.85rem", color: hov ? "#f4b8c8" : "#8a8580", transition: "color 0.3s" }}>
            {p.num}{p.featured ? " — Featured" : ""}
          </span>
          <span style={{ color: hov ? "#f4b8c8" : "rgba(244,184,200,0.3)", fontSize: "1.2rem", transform: hov ? "translate(3px,-3px)" : "none", transition: "all 0.3s", display: "inline-block" }}>↗</span>
        </div>
        <h3 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "1.55rem", fontWeight: 400, color: "#f7f3f0", marginBottom: "0.8rem", lineHeight: 1.25 }}>{p.title}</h3>
        <p style={{ fontSize: "0.86rem", color: "#8a8580", lineHeight: 1.75, marginBottom: "1.5rem" }}>{p.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1.5rem" }}>
          {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(244,184,200,0.08)", paddingTop: "1rem" }}>
          <span style={{ fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#f4b8c8" }}>{p.cat}</span>
          <span style={{ fontSize: "0.72rem", color: "#8a8580" }}>{p.date}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── PROJECTS ─── */
export function Projects({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const filters = [["all","All"],["ai","AI & ML"],["cv","Computer Vision"],["systems","Systems"]];
  const filtered = projects.filter((p) => p.filter.includes(activeFilter));

  return (
    <section id="projects" style={{ padding: "7rem 2rem", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <Reveal><SectionLabel>What I've built</SectionLabel></Reveal>
      <Reveal delay={0.06}><SectionTitle style={{ marginBottom: "2rem" }}>Projects</SectionTitle></Reveal>
      <Reveal delay={0.12}>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "3rem" }}>
          {filters.map(([val, label]) => (
            <button
              key={val}
              onClick={() => setActiveFilter(val)}
              style={{
                background: activeFilter === val ? "rgba(244,184,200,0.1)" : "transparent",
                border: `1px solid ${activeFilter === val ? "rgba(244,184,200,0.4)" : "rgba(244,184,200,0.12)"}`,
                color: activeFilter === val ? "#f4b8c8" : "rgba(247,243,240,0.4)",
                padding: "0.45rem 1.2rem",
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                borderRadius: 2,
                fontFamily: "'DM Sans', sans-serif",
                transition: "all 0.25s",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.4rem" }}>
        {filtered.map((p, i) => (
          <ProjectCard key={p.id} p={p} i={i} onClick={() => onOpenModal(p)} />
        ))}
      </div>
    </section>
  );
}

/* ─── EDUCATION ─── */
export function Education() {
  return (
    <section id="education" style={{ padding: "7rem 2rem", background: "#0d0d0d", position: "relative", zIndex: 2 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal><SectionLabel>Academic Path</SectionLabel></Reveal>
        <Reveal delay={0.07}><SectionTitle>Education</SectionTitle></Reveal>
        <div style={{ position: "relative", paddingLeft: "2.5rem", borderLeft: "1px solid rgba(244,184,200,0.1)" }}>
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.12}>
              <div style={{ position: "relative", paddingBottom: i < education.length - 1 ? "3.5rem" : 0 }}>
                <div style={{ position: "absolute", left: "-2.88rem", top: "0.3rem", width: 10, height: 10, border: "1px solid #f4b8c8", background: "#0d0d0d", borderRadius: "50%" }} />
                <div style={{ position: "absolute", left: "-2.82rem", top: "0.36rem", width: 6, height: 6, background: "rgba(244,184,200,0.35)", borderRadius: "50%", margin: "2px" }} />
                <p style={{ fontSize: "0.68rem", letterSpacing: "0.12em", color: "rgba(244,184,200,0.5)", textTransform: "uppercase", marginBottom: "0.5rem" }}>{e.year}</p>
                <h3 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "1.55rem", fontWeight: 400, color: "#f7f3f0", marginBottom: "0.3rem" }}>{e.degree}</h3>
                <p style={{ fontSize: "0.85rem", color: "#f4b8c8", marginBottom: "0.6rem", opacity: 0.8 }}>{e.school}</p>
                <p style={{ fontSize: "0.84rem", color: "rgba(247,243,240,0.45)", lineHeight: 1.7 }}>{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CERTS + ACTIVITIES ─── */
export function CredentialsAndActivities() {
  return (
    <section style={{ padding: "7rem 2rem", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
        {/* Certifications */}
        <div>
          <Reveal><SectionLabel>Credentials</SectionLabel></Reveal>
          <Reveal delay={0.07}><h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 300, color: "#f7f3f0", marginBottom: "2rem" }}>Certifications</h2></Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.1}>
                <div
                  style={{ background: "#0d0d0d", border: "1px solid rgba(244,184,200,0.1)", padding: "1.6rem", borderRadius: 4, transition: "border-color 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(244,184,200,0.25)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(244,184,200,0.1)"}
                >
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(244,184,200,0.6)", marginBottom: "0.4rem" }}>{c.org}</p>
                  <p style={{ fontSize: "0.95rem", color: "#f7f3f0", lineHeight: 1.4, marginBottom: "1rem", fontWeight: 400 }}>{c.name}</p>
                  <span style={{
                    background: c.status === "completed" ? "rgba(74,222,128,0.07)" : "rgba(244,184,200,0.07)",
                    border: `1px solid ${c.status === "completed" ? "rgba(74,222,128,0.22)" : "rgba(244,184,200,0.2)"}`,
                    color: c.status === "completed" ? "#4ade80" : "#f4b8c8",
                    padding: "0.22rem 0.7rem",
                    fontSize: "0.68rem",
                    borderRadius: 2,
                    letterSpacing: "0.06em",
                  }}>
                    {c.status === "completed" ? "Completed" : "In Progress"}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div>
          <Reveal><SectionLabel>Beyond the Code</SectionLabel></Reveal>
          <Reveal delay={0.07}><h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 300, color: "#f7f3f0", marginBottom: "2rem" }}>Activities &amp; Leadership</h2></Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {activities.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.1}>
                <div
                  style={{ background: "#0d0d0d", border: "1px solid rgba(244,184,200,0.1)", padding: "1.6rem", borderRadius: 4, position: "relative", transition: "border-color 0.3s" }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = "rgba(244,184,200,0.25)"}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = "rgba(244,184,200,0.1)"}
                >
                  <span style={{ position: "absolute", top: "1.4rem", right: "1.4rem", fontSize: "0.72rem", color: "rgba(244,184,200,0.4)", fontFamily: "Cormorant Garamond,Georgia,serif" }}>{a.year}</span>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(244,184,200,0.6)", marginBottom: "0.3rem" }}>{a.role}</p>
                  <p style={{ fontSize: "1rem", color: "#f7f3f0", marginBottom: "0.5rem", fontWeight: 400, lineHeight: 1.3 }}>{a.title}</p>
                  <p style={{ fontSize: "0.83rem", color: "rgba(247,243,240,0.45)", lineHeight: 1.65 }}>{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
export function Contact() {
  return (
    <section id="contact" style={{ padding: "8rem 2rem", background: "#0d0d0d", position: "relative", zIndex: 2, overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(244,184,200,0.04) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Reveal><SectionLabel>Let's connect</SectionLabel></Reveal>
        <Reveal delay={0.08}>
          <h2 style={{ fontFamily: "Cormorant Garamond,Georgia,serif", fontSize: "clamp(2.8rem,6vw,4.5rem)", fontWeight: 300, lineHeight: 1.1, marginBottom: "1.6rem", color: "#f7f3f0", letterSpacing: "-0.01em" }}>
            Let's build something<br /><em style={{ color: "#f4b8c8", fontStyle: "italic" }}>impactful</em> together.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ fontSize: "0.95rem", color: "rgba(247,243,240,0.45)", marginBottom: "3.5rem", maxWidth: 440, margin: "0 auto 3.5rem", lineHeight: 1.8 }}>
            Open to collaborations, projects, and conversations about AI, ML, and everything in between.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { label: "Email", href: "mailto:srijanaidu5676@gmail.com", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg> },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/sai-srija-sanaka-449b97292/", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 10v7M7 7v.01M12 10v7M12 13a3 3 0 0 1 6 0v4"/></svg> },
              { label: "GitHub", href: "https://github.com/srija-ctrl", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.09c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> },
            ].map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "1rem 2.2rem", border: "1px solid rgba(244,184,200,0.18)", borderRadius: 2, textDecoration: "none", color: "rgba(247,243,240,0.7)", fontSize: "0.76rem", letterSpacing: "0.12em", textTransform: "uppercase", transition: "all 0.3s", background: "rgba(244,184,200,0.03)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#f4b8c8"; e.currentTarget.style.color = "#f4b8c8"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.background = "rgba(244,184,200,0.07)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(244,184,200,0.18)"; e.currentTarget.style.color = "rgba(247,243,240,0.7)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.background = "rgba(244,184,200,0.03)"; }}
              >
                {l.icon} {l.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(244,184,200,0.06)", padding: "2rem", textAlign: "center", color: "rgba(247,243,240,0.22)", fontSize: "0.73rem", letterSpacing: "0.1em", position: "relative", zIndex: 2 }}>
      Designed &amp; crafted with care · <span style={{ color: "rgba(244,184,200,0.5)" }}>Sanaka Sai Srija</span> · 2025
    </footer>
  );
}

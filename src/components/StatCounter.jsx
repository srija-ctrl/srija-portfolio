import { useReveal, useCounter } from "../hooks";

export default function StatCounter({ num, label, delay = 0 }) {
  const [ref, visible] = useReveal();
  const isInfinity = num === "∞";
  const isPlus = typeof num === "string" && num.includes("+");
  const parsed = isInfinity ? 0 : parseInt(num);
  const count = useCounter(parsed, visible);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
        borderLeft: "1px solid rgba(244,184,200,0.25)",
        paddingLeft: "1.4rem",
      }}
    >
      <div style={{ fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: "2.8rem", color: "#f4b8c8", lineHeight: 1, letterSpacing: "-0.02em" }}>
        {isInfinity ? "∞" : `${count}${isPlus ? "+" : ""}`}
      </div>
      <div style={{ fontSize: "0.7rem", color: "#8a8580", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.3rem" }}>
        {label}
      </div>
    </div>
  );
}

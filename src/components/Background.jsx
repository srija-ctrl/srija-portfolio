import { useMousePosition } from "../hooks";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  return (
    <div
      style={{
        position: "fixed",
        width: 420,
        height: 420,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(244,184,200,0.055) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
        top: y - 210,
        left: x - 210,
        transition: "top 0.08s ease, left 0.08s ease",
      }}
    />
  );
}

const PARTICLE_DATA = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: (i * 37 + 11) % 100,
  y: (i * 53 + 7) % 100,
  size: (i % 3) * 0.8 + 0.6,
  dur: (i % 4) * 2 + 6,
  delay: (i % 5) * 1.1,
  anim: `float${i % 3}`,
}));

export function Particles() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
      {PARTICLE_DATA.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(244,184,200,0.35)",
            animation: `${p.anim} ${p.dur}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Noise() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        opacity: 0.025,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
    />
  );
}

export function ScanLine() {
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: 0, right: 0,
          height: 1,
          background: "linear-gradient(transparent, rgba(244,184,200,0.04), transparent)",
          animation: "scanline 9s linear infinite",
        }}
      />
    </div>
  );
}

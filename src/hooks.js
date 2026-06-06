import { useState, useEffect, useRef } from "react";

export function useTyping(words) {
  const [display, setDisplay] = useState("");
  const state = useRef({ wi: 0, ci: 0, del: false, pausing: false });

  useEffect(() => {
    const tick = () => {
      const s = state.current;
      if (s.pausing) return;
      const word = words[s.wi];
      if (!s.del) {
        s.ci++;
        setDisplay(word.slice(0, s.ci));
        if (s.ci === word.length) {
          s.pausing = true;
          setTimeout(() => { s.pausing = false; s.del = true; }, 1400);
        }
      } else {
        s.ci--;
        setDisplay(word.slice(0, s.ci));
        if (s.ci === 0) {
          s.del = false;
          s.wi = (s.wi + 1) % words.length;
        }
      }
    };
    const id = setInterval(tick, state.current.del ? 55 : 95);
    return () => clearInterval(id);
  }, [words]);

  return display;
}

export function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function useCounter(target, active) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || typeof target !== "number") return;
    let v = 0;
    const step = target / 60;
    const id = setInterval(() => {
      v += step;
      if (v >= target) { setCount(target); clearInterval(id); }
      else setCount(Math.floor(v));
    }, 20);
    return () => clearInterval(id);
  }, [target, active]);
  return count;
}

export function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [threshold]);
  return scrolled;
}

export function useMousePosition() {
  const [pos, setPos] = useState({ x: -300, y: -300 });
  useEffect(() => {
    const fn = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  return pos;
}

import { useEffect, useRef, useState } from "react";

const SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

// Typing the word "aiman" also triggers Developer Mode.
const WORD_SEQUENCE = ["a", "i", "m", "a", "n"];

function isTypingTarget(target: EventTarget | null) {
  const el = target as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    el.isContentEditable === true
  );
}

/** Returns true for `durationMs` after the Konami code is entered. */
export function useKonamiCode(durationMs = 5000) {
  const [active, setActive] = useState(false);
  const index = useRef(0);
  const wordIndex = useRef(0);

  useEffect(() => {
    const matches = (e: KeyboardEvent, expected: string) => {
      const key = e.key?.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === expected) return true;
      // fallback to physical key codes (layout / IME safe)
      const code = e.code;
      if (expected.startsWith("Arrow")) return code === expected;
      return code === `Key${expected.toUpperCase()}`;
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (isTypingTarget(e.target)) return;

      // Konami code tracking
      if (matches(e, SEQUENCE[index.current]!)) {
        index.current += 1;
        if (index.current === SEQUENCE.length) {
          index.current = 0;
          setActive(true);
        }
      } else {
        index.current = matches(e, SEQUENCE[0]!) ? 1 : 0;
      }

      // "aiman" word tracking
      const key = e.key?.length === 1 ? e.key.toLowerCase() : "";
      if (!key) return;
      if (key === WORD_SEQUENCE[wordIndex.current]) {
        wordIndex.current += 1;
        if (wordIndex.current === WORD_SEQUENCE.length) {
          wordIndex.current = 0;
          setActive(true);
        }
      } else {
        wordIndex.current = key === WORD_SEQUENCE[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", onKeyDown, true);
    return () => window.removeEventListener("keydown", onKeyDown, true);
  }, []);


  useEffect(() => {
    if (!active) return;
    const t = window.setTimeout(() => setActive(false), durationMs);
    return () => window.clearTimeout(t);
  }, [active, durationMs]);

  return active;
}

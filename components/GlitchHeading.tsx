"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";

const DECRYPT_CHARS = "!<>-_\\/[]{}—=+*^?#________";

type Props = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
};

export default function GlitchHeading({ children, as = "span", className }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const originalRef = useRef<string>("");
  const scramblingRef = useRef<boolean>(false);

  useEffect(() => {
    if (ref.current) originalRef.current = ref.current.innerHTML;
  });

  const onMouseEnter = useCallback(() => {
    const element = ref.current;
    if (!element || scramblingRef.current) return;
    const original = element.innerHTML;
    const text = element.textContent ?? "";
    originalRef.current = original;
    scramblingRef.current = true;

    let frame = 0;
    const interval = window.setInterval(() => {
      let out = "";
      let done = 0;
      for (let i = 0; i < text.length; i++) {
        const character = text[i];
        if (frame >= 8 + i * 1.2 || character === " ") {
          out += character;
          done++;
        } else {
          out += DECRYPT_CHARS[Math.floor(Math.random() * DECRYPT_CHARS.length)];
        }
      }
      element.textContent = out;
      frame++;
      if (done === text.length) {
        window.clearInterval(interval);
        element.innerHTML = originalRef.current;
        scramblingRef.current = false;
      }
    }, 35);
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as React.RefObject<HTMLHeadingElement & HTMLSpanElement>}
      className={className}
      data-glitch=""
      onMouseEnter={onMouseEnter}
    >
      {children}
    </Tag>
  );
}

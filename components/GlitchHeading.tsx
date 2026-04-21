"use client";

import { type ReactNode, useRef } from "react";

const DECRYPT_CHARS = "!<>-_\\/[]{}—=+*^?#________";

type Props = {
  as?: "h1" | "h2" | "h3" | "span" | "a" | "div";
  className?: string;
  children: ReactNode;
  style?: React.CSSProperties;
  href?: string;
};

export function GlitchHeading({ as: Tag = "span", children, className, style, href }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  const handleMouseEnter = () => {
    const element = ref.current;
    if (!element) return;
    if (element.dataset.scrambling === "1") return;

    const originalHtml = element.innerHTML;
    const text = element.textContent ?? "";
    element.dataset.scrambling = "1";

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
        element.innerHTML = originalHtml;
        delete element.dataset.scrambling;
      }
    }, 35);
  };

  const commonProps = {
    ref: ref as React.Ref<never>,
    className,
    style,
    "data-glitch": true,
    onMouseEnter: handleMouseEnter,
  } as Record<string, unknown>;

  if (Tag === "a") {
    return (
      <a {...(commonProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)} href={href}>
        {children}
      </a>
    );
  }
  return <Tag {...(commonProps as React.HTMLAttributes<HTMLElement>)}>{children}</Tag>;
}

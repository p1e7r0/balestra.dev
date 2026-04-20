"use client";

import { useEffect, useRef } from "react";
import { bootLines } from "@/data/cv";

export default function BootTerminal() {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const terminal = terminalRef.current;
    if (!terminal) return;
    let cancelled = false;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms);
      });

    (async () => {
      terminal.innerHTML = "";
      for (const line of bootLines) {
        if (cancelled) return;
        const element = document.createElement("span");
        element.className = "line";
        element.innerHTML = line.html;
        terminal.appendChild(element);
        const bar = element.querySelector<HTMLSpanElement>(".bar span");
        if (bar) {
          bar.style.transform = "scaleX(0)";
          bar.style.transition = "transform .9s ease";
          requestAnimationFrame(() => {
            bar.style.transform = "scaleX(1)";
          });
        }
        terminal.scrollTop = terminal.scrollHeight;
        await wait(line.delay);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="panel boot">
      <span className="cut-br" />
      <span className="cut-bl" />
      <div className="panel-head">
        <span>
          <span className="id">◉</span> TERM.01 // BOOT.SEQUENCE
        </span>
        <span className="tags">
          <span>PID 0x1991</span>
          <span>TTY/0</span>
        </span>
      </div>
      <div className="panel-body" ref={terminalRef} />
    </div>
  );
}

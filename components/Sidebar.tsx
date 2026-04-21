"use client";

import { useEffect, useState } from "react";

const navigationEntries = [
  { id: "hero", index: "00", label: "ident", key: "G" },
  { id: "skills", index: "01", label: "stack", key: "S" },
  { id: "experience", index: "02", label: "log", key: "E" },
  { id: "education", index: "03", label: "edu", key: "D" },
  { id: "contact", index: "04", label: "link", key: "C" },
];

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function Sidebar() {
  const [activeId, setActiveId] = useState<string>("hero");
  const [clockText, setClockText] = useState<string>("--:--:--");
  const [dateText, setDateText] = useState<string>("LOADING...");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClockText(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);
      setDateText(`${now.toUTCString().slice(0, 16).toUpperCase()} // UTC`);
    };
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sections = navigationEntries
      .map((entry) => document.getElementById(entry.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    for (const section of sections) {
      observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <aside>
      <div className="sb-block">
        <div className="logo">
          BALESTRA<span className="g">.</span>DEV
          <br />
          <small>Software Engineer // CH</small>
        </div>
      </div>

      <nav>
        <div className="sb-title sb-block">
          Nav.map <span>05</span>
        </div>
        <ol>
          {navigationEntries.map((entry) => (
            <li key={entry.id}>
              <a
                href={`#${entry.id}`}
                className={activeId === entry.id ? "active" : ""}
                data-nav={entry.id}
              >
                <span className="n">{entry.index}</span>
                <span>{entry.label}</span>
                <span className="k">[{entry.key}]</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="sb-block">
        <div className="sb-title">Sys.clock</div>
        <div className="clock">{clockText}</div>
        <div className="clock-sub">{dateText}</div>
      </div>

      <div className="sb-block">
        <div className="sb-title">Uptime</div>
        <div className="kv">
          <span>Industry</span>
          <b>11y</b>
        </div>
        <div className="kv">
          <span>Domicile</span>
          <b>Sementina</b>
        </div>
        <div className="kv">
          <span>Timezone</span>
          <b>CET+00</b>
        </div>
        <div className="kv">
          <span>Status</span>
          <b style={{ color: "var(--accent)" }}>OPEN</b>
        </div>
      </div>

      <div className="sb-block">
        <div className="mini-map">
          <div>CPU.NOMINAL</div>
          <div className="bar">
            <span style={{ ["--w" as string]: "78%" } as React.CSSProperties} />
          </div>
          <div style={{ marginTop: 8 }}>MEM.COFFEE</div>
          <div className="bar">
            <span style={{ ["--w" as string]: "92%" } as React.CSSProperties} />
          </div>
          <div style={{ marginTop: 8 }}>IDE.VIM</div>
          <div className="bar">
            <span style={{ ["--w" as string]: "100%" } as React.CSSProperties} />
          </div>
        </div>
      </div>

      <div className="sb-footer">
        <div>
          <span className="led" />
          SECURE / TLS 1.3
        </div>
        <div style={{ marginTop: 4 }}>© 2026 // BALESTRA.DEV</div>
      </div>
    </aside>
  );
}

"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/cv";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export default function Sidebar({ activeId }: { activeId: string }) {
  const [clock, setClock] = useState("--:--:--");
  const [dateString, setDateString] = useState("LOADING...");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(`${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);
      setDateString(`${now.toUTCString().slice(0, 16).toUpperCase()} // UTC`);
    };
    tick();
    const handle = window.setInterval(tick, 1000);
    return () => window.clearInterval(handle);
  }, []);

  return (
    <aside>
      <div className="sb-block">
        <div className="logo">
          BALESTRA<span className="g">.</span>P<br />
          <small>Software Engineer // CH</small>
        </div>
      </div>

      <nav>
        <div className="sb-title sb-block">
          Nav.map <span>05</span>
        </div>
        <ol>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={activeId === link.id ? "active" : undefined}>
                <span className="n">{link.num}</span>
                <span>{link.label}</span>
                <span className="k">[{link.key}]</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="sb-block">
        <div className="sb-title">Sys.clock</div>
        <div className="clock">{clock}</div>
        <div className="clock-sub">{dateString}</div>
      </div>

      <div className="sb-block">
        <div className="sb-title">Uptime</div>
        <div className="kv">
          <span>Industry</span>
          <b>11y</b>
        </div>
        <div className="kv">
          <span>Domicile</span>
          <b>BIGORIO</b>
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

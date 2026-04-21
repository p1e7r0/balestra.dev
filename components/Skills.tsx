import { domains, locales, stackItems } from "@/data/cv";
import { GlitchHeading } from "./GlitchHeading";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function Skills() {
  return (
    <section className="hud" id="skills" data-ix="// 01 — STACK.PROFILE">
      <div className="section-head reveal">
        <h2>
          <GlitchHeading as="span">
            Runtime <span className="g">stack_</span>
          </GlitchHeading>
        </h2>
        <span className="sub">// STACK.COUNT={pad(stackItems.length)} — FLUENCY ESTIMATED</span>
      </div>

      <div className="skills-grid">
        <div className="panel reveal">
          <span className="cut-br" />
          <span className="cut-bl" />
          <div className="panel-head">
            <span>
              <span className="id">◉</span> PKG.STACK
            </span>
            <span className="tags">
              <span>sorted / fluency</span>
            </span>
          </div>
          <div className="panel-body" style={{ padding: 0 }}>
            <div className="stack-list">
              {stackItems.map((item, index) => (
                <div key={item.name} className="row scan-on-hover">
                  <span className="id">{pad(index)}</span>
                  <span className="name">{item.name}</span>
                  <div className="meter">
                    <span
                      style={
                        {
                          ["--w" as string]: `${item.percent}%`,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                  <span className="pct">{item.percent}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="panel reveal">
            <span className="cut-br" />
            <span className="cut-bl" />
            <div className="panel-head">
              <span>
                <span className="id">◉</span> PROC.DOMAINS
              </span>
              <span className="tags">
                <span>active</span>
              </span>
            </div>
            <div className="domain-grid">
              {domains.map((domain) => (
                <div key={domain.title} className="domain">
                  <span className="ico">{domain.icon}</span>
                  <h4>{domain.title}</h4>
                  <p>{domain.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel reveal">
            <span className="cut-br" />
            <span className="cut-bl" />
            <div className="panel-head">
              <span>
                <span className="id">◉</span> I18N.LOCALES
              </span>
              <span className="tags">
                <span>speak / read</span>
              </span>
            </div>
            <div className="lang-block">
              {locales.map((locale) => (
                <div key={locale.language} className="lang-row">
                  <span>{locale.language}</span>
                  <span className="lvl">{locale.level}</span>
                  <div className="dots">
                    {Array.from({ length: locale.total }).map((_, dotIndex) => (
                      <i key={dotIndex} className={dotIndex < locale.filled ? "on" : ""} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

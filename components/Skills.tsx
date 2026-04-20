import { domains, locales, skills } from "@/data/cv";
import GlitchHeading from "./GlitchHeading";

export default function Skills() {
  return (
    <section className="hud" id="skills" data-ix="// 01 — STACK.PROFILE">
      <div className="section-head reveal" data-reveal="">
        <h2>
          <GlitchHeading as="span">Runtime stack_</GlitchHeading>
        </h2>
        <span className="sub">// LANG.COUNT=12 — FLUENCY ESTIMATED</span>
      </div>

      <div className="skills-grid">
        <div className="panel reveal" data-reveal="">
          <span className="cut-br" />
          <span className="cut-bl" />
          <div className="panel-head">
            <span>
              <span className="id">◉</span> PKG.LANGUAGES
            </span>
            <span className="tags">
              <span>sorted / fluency</span>
            </span>
          </div>
          <div className="panel-body" style={{ padding: 0 }}>
            <div className="stack-list">
              {skills.map((skill) => (
                <div className="row scan-on-hover" key={skill.id}>
                  <span className="id">{skill.id}</span>
                  <span className="name">{skill.name}</span>
                  <div className="meter">
                    <span style={{ ["--w" as string]: `${skill.pct}%` } as React.CSSProperties} />
                  </div>
                  <span className="pct">{skill.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="panel reveal" data-reveal="">
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
                <div className="domain" key={domain.name}>
                  <span className="ico">{domain.ico}</span>
                  <h4>{domain.name}</h4>
                  <p>{domain.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="panel reveal" data-reveal="">
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
                <div className="lang-row" key={locale.language}>
                  <span>{locale.language}</span>
                  <span className="lvl">{locale.level}</span>
                  <div className="dots">
                    {Array.from({ length: 5 }, (_, index) => (
                      <i key={index} className={index < locale.dots ? "on" : undefined} />
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

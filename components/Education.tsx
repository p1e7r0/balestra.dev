import { award, education } from "@/data/cv";
import { GlitchHeading } from "./GlitchHeading";

export function Education() {
  return (
    <section className="hud" id="education" data-ix="// 03 — CRED.VAULT">
      <div className="section-head reveal">
        <h2>
          <GlitchHeading as="span">
            Cred<span className="g">.vault_</span>
          </GlitchHeading>
        </h2>
        <span className="sub">// FORMAL TRAINING + AWARDS</span>
      </div>

      <div className="edu-grid">
        {education.map((card) => (
          <div
            key={card.title}
            className="edu-card reveal scan-on-hover"
            style={card.span ? { gridColumn: "1 / -1" } : undefined}
          >
            <span className="badge">{card.badge}</span>
            <div className="date">{card.dateRange}</div>
            <h4>{card.title}</h4>
            <div className="inst">{card.institution}</div>
            <div className="loc">{card.detail}</div>
          </div>
        ))}

        <div className="award reveal">
          <span className="tag">{award.label}</span>
          <div className="title">
            {award.title}
            <i>{award.subtitle}</i>
          </div>
          <div className="yr">{award.year}</div>
        </div>
      </div>
    </section>
  );
}

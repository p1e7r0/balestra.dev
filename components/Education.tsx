import { award, education } from "@/data/cv";
import GlitchHeading from "./GlitchHeading";

export default function Education() {
  return (
    <section className="hud" id="education" data-ix="// 03 — CRED.VAULT">
      <div className="section-head reveal" data-reveal="">
        <h2>
          <GlitchHeading as="span">Cred.vault_</GlitchHeading>
        </h2>
        <span className="sub">// FORMAL TRAINING + AWARDS</span>
      </div>

      <div className="edu-grid">
        {education.map((entry) => (
          <div
            className="edu-card reveal scan-on-hover"
            data-reveal=""
            key={entry.title}
            style={entry.span ? { gridColumn: "1 / -1" } : undefined}
          >
            <span className="badge">{entry.badge}</span>
            <div className="date">{entry.date}</div>
            <h4>{entry.title}</h4>
            <div className="inst">{entry.institution}</div>
            <div className="loc">{entry.location}</div>
          </div>
        ))}

        <div className="award reveal" data-reveal="">
          <span className="tag" style={{ whiteSpace: "pre-line" }}>
            {award.tag}
          </span>
          <div className="title">
            {award.title}
            <i>{award.thesis}</i>
          </div>
          <div className="yr">{award.year}</div>
        </div>
      </div>
    </section>
  );
}

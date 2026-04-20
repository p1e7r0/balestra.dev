import { experiences } from "@/data/cv";
import GlitchHeading from "./GlitchHeading";

export default function Experience() {
  return (
    <section className="hud" id="experience" data-ix="// 02 — EXEC.LOG">
      <div className="section-head reveal" data-reveal="">
        <h2>
          <GlitchHeading as="span">Exec.log_</GlitchHeading>
        </h2>
        <span className="sub">// 06 ENGAGEMENTS — SORTED / DESC</span>
      </div>

      <div className="panel reveal" data-reveal="">
        <span className="cut-br" />
        <span className="cut-bl" />
        <div className="panel-head">
          <span>
            <span className="id">◉</span> LOG.TAIL / FILTER: *
          </span>
          <span className="tags">
            <span>chronological</span>
            <span>2013—present</span>
          </span>
        </div>
        <div className="panel-body">
          <div className="timeline">
            {experiences.map((entry) => (
              <div className={`tl-item${entry.dim ? " dim" : ""}`} key={`${entry.date}-${entry.title}`}>
                <div className="head">
                  <span className="date">{entry.date}</span>
                  <div>
                    <h3>{entry.title}</h3>
                    <div className="co">{entry.company}</div>
                  </div>
                  <span
                    className="date"
                    style={entry.durationWarn ? { color: "var(--warn)" } : undefined}
                  >
                    {entry.duration}
                  </span>
                </div>
                <p className="role">{entry.role}</p>
                <div className="stack">
                  {entry.stack.map((chip) => (
                    <span className={`chip${chip.alt ? " alt" : ""}`} key={chip.label}>
                      {chip.label}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

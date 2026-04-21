import { experience } from "@/data/cv";
import { GlitchHeading } from "./GlitchHeading";

export function Experience() {
  return (
    <section className="hud" id="experience" data-ix="// 02 — EXEC.LOG">
      <div className="section-head reveal">
        <h2>
          <GlitchHeading as="span">
            Exec<span className="g">.log_</span>
          </GlitchHeading>
        </h2>
        <span className="sub">// 06 ENGAGEMENTS — SORTED / DESC</span>
      </div>

      <div className="panel reveal">
        <span className="cut-br" />
        <span className="cut-bl" />
        <div className="panel-head">
          <span>
            <span className="id">◉</span> LOG.TAIL / FILTER: *{" "}
          </span>
          <span className="tags">
            <span>chronological</span>
            <span>2013—present</span>
          </span>
        </div>
        <div className="panel-body">
          <div className="timeline">
            {experience.map((entry) => {
              const sideColor =
                entry.sideLabelColor === "warn"
                  ? "var(--warn)"
                  : entry.sideLabelColor === "dim"
                    ? "var(--ink-dimmer)"
                    : undefined;
              return (
                <div
                  key={`${entry.title}-${entry.dateRange}`}
                  className={`tl-item${entry.dim ? " dim" : ""}`}
                >
                  <div className="head">
                    <span className="date">{entry.dateRange}</span>
                    <div>
                      <h3>{entry.title}</h3>
                      <div className="co">{entry.company}</div>
                    </div>
                    <span className="date" style={sideColor ? { color: sideColor } : undefined}>
                      {entry.sideLabel}
                    </span>
                  </div>
                  <p className="role">{entry.role}</p>
                  <div className="stack">
                    {entry.stack.map((chip) => (
                      <span key={chip.label} className={`chip${chip.alt ? " alt" : ""}`}>
                        {chip.label}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

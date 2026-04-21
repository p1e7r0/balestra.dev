import { identity, kpis } from "@/data/cv";
import { BootTerminal } from "./BootTerminal";
import { GlitchHeading } from "./GlitchHeading";

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-main">
        <div className="panel ident">
          <span className="cut-br" />
          <span className="cut-bl" />

          <div className="meta">
            <span>{identity.idLine}</span>
            <span>{identity.affiliation}</span>
            <span className="on">● AVAILABLE</span>
          </div>

          <h1>
            <GlitchHeading>PIETRO</GlitchHeading>
            <br />
            <GlitchHeading className="g">BALESTRA</GlitchHeading>
            <span className="slash">_</span>
          </h1>
          <div className="sub">&gt; Software Engineer // Mobile + CV + Robotics</div>

          <p className="tag">
            <span id="tagline">{identity.tagline}</span>
            <span className="caret" />
          </p>
        </div>

        <div className="kpis">
          {kpis.map((kpi) => (
            <div key={kpi.label} className="kpi reveal">
              <div className="l">{kpi.label}</div>
              <div className="v">
                {kpi.value}
                {kpi.unit ? <span className="u">{kpi.unit}</span> : null}
              </div>
              <div className="s">{kpi.caption}</div>
            </div>
          ))}
        </div>
      </div>

      <BootTerminal />
    </section>
  );
}

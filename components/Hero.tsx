import { identity, kpis } from "@/data/cv";
import BootTerminal from "./BootTerminal";
import GlitchHeading from "./GlitchHeading";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-main">
        <div className="panel ident">
          <span className="cut-br" />
          <span className="cut-bl" />
          <div className="bracket-deco tl">⌐</div>
          <div className="bracket-deco br">¬</div>

          <div className="meta">
            <span>{identity.idTag}</span>
            <span>{identity.origin}</span>
            <span className="on">● AVAILABLE</span>
          </div>

          <h1>
            <GlitchHeading>{identity.firstName}</GlitchHeading>
            <br />
            <GlitchHeading className="g">{identity.lastName}</GlitchHeading>
            <span className="slash">_</span>
          </h1>
          <div className="sub">&gt; {identity.role}</div>

          <p className="tag">
            <span>{identity.tagline}</span>
            <span className="caret" />
          </p>
        </div>

        <div className="kpis">
          {kpis.map((kpi) => (
            <div className="kpi reveal" data-reveal="" key={kpi.label}>
              <div className="l">{kpi.label}</div>
              <div className="v">
                {kpi.value}
                {kpi.unit ? <span className="u">{kpi.unit}</span> : null}
              </div>
              <div className="s">{kpi.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <BootTerminal />
    </section>
  );
}

import { identity } from "@/data/cv";

export default function Contact() {
  return (
    <section className="hud" id="contact" data-ix="// 04 — ESTABLISH.LINK">
      <div className="contact-grid">
        <div className="panel contact-main reveal" data-reveal="">
          <span className="cut-br" />
          <span className="cut-bl" />
          <div className="bracket-deco tl">⌐</div>
          <div className="bracket-deco br">¬</div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.22em",
              color: "var(--accent)",
              textTransform: "uppercase",
            }}
          >
            // HANDSHAKE
          </div>
          <h2>
            Open<span className="g">.</span>channel<span className="g">_</span>
          </h2>
          <p className="sig">
            Consulting, engineering work, R&amp;D in mobile / CV / robotics — inbox is monitored from
            Bigorio, CH. Keys exchanged on request.
          </p>

          <div className="cta-row">
            <a className="cta primary" href={`mailto:${identity.email}`} data-glitch="">
              <span>▸</span>
              <span>mail // {identity.email}</span>
              <span className="k">[M]</span>
            </a>
            <a className="cta" href={`tel:${identity.phoneDial}`} data-glitch="">
              <span>▸</span>
              <span>dial // {identity.phone}</span>
              <span className="k">[P]</span>
            </a>
            <a className="cta" href="/cv.pdf" download data-glitch="">
              <span>▸</span>
              <span>download // cv.pdf</span>
              <span className="k">[D]</span>
            </a>
          </div>
        </div>

        <div className="panel reveal" data-reveal="">
          <span className="cut-br" />
          <span className="cut-bl" />
          <div className="panel-head">
            <span>
              <span className="id">◉</span> NODE.INFO
            </span>
            <span className="tags">
              <span>cleartext</span>
            </span>
          </div>
          <div className="contact-list">
            <div className="row">
              <span className="l">NAME</span>
              <span className="v">{identity.name}</span>
            </div>
            <div className="row">
              <span className="l">MAIL</span>
              <span className="v">
                <a href={`mailto:${identity.email}`}>{identity.email}</a>
              </span>
            </div>
            <div className="row">
              <span className="l">PHONE</span>
              <span className="v">{identity.phone}</span>
            </div>
            <div className="row">
              <span className="l">SKYPE</span>
              <span className="v">{identity.skype}</span>
            </div>
            <div className="row">
              <span className="l">NODE</span>
              <span className="v">{identity.address}</span>
            </div>
            <div className="row">
              <span className="l">NATION</span>
              <span className="v">{identity.nationality}</span>
            </div>
            <div className="row">
              <span className="l">DOB</span>
              <span className="v">{identity.dob}</span>
            </div>
            <div className="row">
              <span className="l">REFS</span>
              <span className="v" style={{ color: "var(--ink-dim)" }}>
                available on demand
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

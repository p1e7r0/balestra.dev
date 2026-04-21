import { identity } from "@/data/cv";

export function ChromeTop() {
  return (
    <div className="chrome-top">
      <div className="left">
        <span className="dot" />
        <b>SYS.CV</b>
        <span className="sep">//</span>
        <span>{identity.handle}</span>
        <span className="sep">//</span>
        <span>v4.26.0</span>
      </div>
      <div className="right">
        <span>
          UPLINK <b>STABLE</b>
        </span>
        <span className="sep">//</span>
        <span>
          LAT <b>7ms</b>
        </span>
        <span className="sep">//</span>
        <span id="coord">{identity.coordinates}</span>
        <span className="sep">//</span>
        <span>
          LOC <b>{identity.locationCode}</b>
        </span>
      </div>
    </div>
  );
}

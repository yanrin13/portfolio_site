import ASCIIAnimation from "../components/ASCIIAnimation";
import Card from "./Card";

export default function Music() {
  return (
    <div className="music" id="music">
      <h2 className="music__title title">MUSIC</h2>
      <div className="music__grid">
        <div className="music__item bg-liquid-glass">
          <iframe
            width="100%"
            height="600px"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="-"
          ></iframe>
        </div>
        <Card className="music__item bg-liquid-glass">
          <div className="music__gif">
            <ASCIIAnimation />
          </div>
        </Card>
      </div>
    </div>
  );
}

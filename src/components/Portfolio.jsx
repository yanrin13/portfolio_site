import Card from "./Card";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h2 className="portfolio__title title">PORTFOLIO</h2>
      <div className="portfolio__grid">
        <Card className="portfolio__item bg-liquid-glass">
          <p className="portfolio__description">
            I've started to take a bit of an interest in neural networks. You
            can check out some of my small projects.
          </p>
          <a href="-" className="portfolio__link">
            view on GitHub
          </a>
        </Card>
        <Card className="portfolio__item bg-liquid-glass">
          <p className="portfolio__description">
            I sometimes publish my frontend layouts
          </p>
          <a href="-" className="portfolio__link">
            view on GitHub
          </a>
        </Card>
        <Card className="portfolio__item bg-liquid-glass">
          <p className="portfolio__description">
            This frontend-end is open-source too!
          </p>
          <a href="-" className="portfolio__link">
            view on GitHub
          </a>
        </Card>
      </div>
    </div>
  );
}

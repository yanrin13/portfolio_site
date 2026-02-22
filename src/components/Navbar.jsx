export default function Navbar() {
  return (
    <header>
      <div className="nav">
        <ul className="nav__list">
          <a href="#about" className="nav__item nav-mask">
            about
          </a>
          <a href="#portfolio" className="nav__item nav-mask">
            portfolio
          </a>
          <a href="#music" className="nav__item nav-mask">
            music
          </a>
        </ul>
      </div>
    </header>
  );
}

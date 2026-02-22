import Music from "./Music";
import Portfolio from "./Portfolio";
import About from "./About";

export default function InfoBlock() {
  return (
    <section className="content">
      <About></About>
      <Portfolio></Portfolio>
      <Music></Music>
    </section>
  );
}

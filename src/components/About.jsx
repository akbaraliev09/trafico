import Img from "./Img.jsx";

export default function About() {
  return (
    <>
      <section id="about" className="section">
        <div className="wrap split">
          <div>
            <h3 className="label">About us</h3>
            <p className="text">
              The occupational traffic permit is one of the most important things in the company when
              carrying out freight transport. In fact, it is a prerequisite for doing business traffic at all.
            </p>
            <blockquote className="quote">
              How do you do when you need to obtain a commercial traffic permit for freight transport to your business?
            </blockquote>
          </div>
          <Img name="about.png" alt="Courier with a tablet" className="split__img" />
        </div>
      </section>

      <section id="how" className="section">
        <div className="wrap split">
          <Img name="how.png" alt="Support agent with a checklist" className="split__img" />
          <div>
            <h3 className="label">How to apply</h3>
            <p className="text">
              When applying for a traffic permit, there are certain requirements that you must meet that are
              included in the examination: requirements for professional knowledge, solid establishment, good
              reputation and financial resources. Important to remember is to confirm your application for a
              traffic permit by the company’s company signer or CEO.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

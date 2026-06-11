import type { MetaFunction } from "react-router";

const values = [
  "Presence over performance",
  "Details with meaning",
  "Beauty that still feels human",
  "Planning that protects the moment",
];

export const meta: MetaFunction = () => [
  { title: "About | In Solace Times" },
  {
    name: "description",
    content:
      "Learn about the heart behind In Solace Times and its approach to meaningful event experiences.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero section-glow">
        <div className="container narrow stack">
          <p className="kicker">About</p>
          <h1 className="h1">Creating space for moments that feel alive.</h1>
          <p className="lede">
            In Solace Times was created for people who want more than a well-run event. The goal is to craft an atmosphere where people feel seen, held, celebrated, and remembered.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <div className="feature-card tall-card">
            <p className="mini-label">The belief</p>
            <h2>Every gathering tells people what mattered.</h2>
          </div>
          <div className="stack body-copy">
            <p>
              Our work starts with the emotional centre of the event, then builds outward into design, timing, flow, vendor coordination, and visual storytelling.
            </p>
            <p>
              The result should feel polished without becoming cold, elevated without becoming stiff, and personal without becoming chaotic. Apparently that is a high bar now. We keep it there anyway.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-panel-section">
        <div className="container panel-large">
          <div>
            <p className="kicker">What guides us</p>
            <h2 className="h2">A clear point of view, quietly held.</h2>
          </div>
          <div className="value-list">
            {values.map((value) => (
              <div className="value-item" key={value}>
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

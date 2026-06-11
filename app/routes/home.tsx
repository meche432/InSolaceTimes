import type { MetaFunction } from "react-router";

const highlights = [
  {
    title: "Intentional planning",
    text: "From the first idea to the final send-off, every detail is shaped around the feeling your event should leave behind.",
  },
  {
    title: "Atmosphere first",
    text: "Design, flow, music, timing, and space all work together so the room feels considered, not simply decorated.",
  },
  {
    title: "Story-led memories",
    text: "Photo and video direction help preserve the day with the same care used to create it.",
  },
];

const services = [
  "Private celebrations",
  "Milestone moments",
  "Creative gatherings",
  "Brand experiences",
];

export const meta: MetaFunction = () => [
  { title: "In Solace Times | Event Experiences" },
  {
    name: "description",
    content:
      "In Solace Times creates thoughtful event experiences shaped around atmosphere, memory, and meaningful detail.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero section-glow">
        <div className="container hero-grid">
          <div className="stack hero-copy">
            <p className="kicker">In Solace Times</p>
            <h1 className="h1">Transform events into experiences worth remembering.</h1>
            <p className="lede">
              We shape gatherings with atmosphere, intention, and story, so your event feels less like a schedule and more like a moment people carry with them.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="/contact">
                Start planning
              </a>
              <a className="btn btn-ghost" href="/portfolio">
                View the feel
              </a>
            </div>
          </div>

          <div className="feature-card hero-feature">
            <div className="mini-label">What we create</div>
            <h2>Experiences with a pulse.</h2>
            <p>
              Planning is the structure. Feeling is the point. We bring both together with creative direction, thoughtful coordination, and visual storytelling.
            </p>
            <div className="stat-row">
              <div>
                <strong>01</strong>
                <span>Concept</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Coordination</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Memory</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <p className="kicker">Our approach</p>
            <h2 className="h2">Not just a nice room. A complete emotional arc.</h2>
          </div>
          <p className="section-copy">
            In Solace Times is built for people who want their event to feel personal, cinematic, and deeply considered. We help turn scattered ideas into a clear experience, then guide the details so the moment lands properly.
          </p>
        </div>

        <div className="container card-grid three-up">
          {highlights.map((item) => (
            <article className="card elevated" key={item.title}>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft-panel-section">
        <div className="container panel-large">
          <div className="stack">
            <p className="kicker">Experiences</p>
            <h2 className="h2">Built for intimate moments, major milestones, and everything that deserves care.</h2>
          </div>
          <div className="pill-grid">
            {services.map((service) => (
              <a className="pill" href="/experiences" key={service}>
                {service}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band">
          <div>
            <p className="kicker">Start here</p>
            <h2 className="h2">Bring the idea. We’ll help shape the moment.</h2>
          </div>
          <a className="btn btn-primary" href="/contact">
            Book a consultation
          </a>
        </div>
      </section>
    </>
  );
}

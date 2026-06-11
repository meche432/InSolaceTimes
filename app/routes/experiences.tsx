import type { MetaFunction } from "react-router";

const experiences = [
  {
    title: "Event planning",
    text: "Support with concept, structure, timeline, vendor coordination, and the practical decisions that keep the day moving.",
  },
  {
    title: "Creative direction",
    text: "A clear visual and emotional direction for the event, from atmosphere and styling to the small details guests actually remember.",
  },
  {
    title: "Day-of coordination",
    text: "Calm execution when the room is full, the clock is moving, and everyone suddenly remembers humans are unreliable machines.",
  },
  {
    title: "Photo and video storytelling",
    text: "Direction for visual memories that feel connected to the event, not just technically correct images in chronological order.",
  },
];

export const meta: MetaFunction = () => [
  { title: "Experiences | In Solace Times" },
  {
    name: "description",
    content:
      "Explore event planning, creative direction, coordination, and storytelling services from In Solace Times.",
  },
];

export default function Experiences() {
  return (
    <>
      <section className="page-hero section-glow">
        <div className="container narrow stack">
          <p className="kicker">Experiences</p>
          <h1 className="h1">Thoughtful planning for events with emotional weight.</h1>
          <p className="lede">
            Whether you are building something intimate, polished, spiritual, celebratory, or brand-led, the work begins with the feeling and becomes a plan.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container card-grid two-up">
          {experiences.map((item) => (
            <article className="card elevated experience-card" key={item.title}>
              <p className="mini-label">Service</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section soft-panel-section">
        <div className="container cta-band">
          <div>
            <p className="kicker">Next step</p>
            <h2 className="h2">Bring the rough idea. We’ll help give it form.</h2>
          </div>
          <a className="btn btn-primary" href="/contact">
            Start an inquiry
          </a>
        </div>
      </section>
    </>
  );
}

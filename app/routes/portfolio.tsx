import type { MetaFunction } from "react-router";

const projects = [
  {
    title: "Private celebration",
    type: "Milestone event",
    text: "Use this card for a real event summary, a few photos, and the feeling you helped create.",
  },
  {
    title: "Creative gathering",
    type: "Curated experience",
    text: "Replace this with a short case study: the brief, the atmosphere, and the final result.",
  },
  {
    title: "Brand moment",
    type: "Visual direction",
    text: "Show how planning, styling, and content worked together to make the event feel distinct.",
  },
];

export const meta: MetaFunction = () => [
  { title: "Portfolio | In Solace Times" },
  {
    name: "description",
    content:
      "View selected event concepts, celebrations, and visual stories from In Solace Times.",
  },
];

export default function Portfolio() {
  return (
    <>
      <section className="page-hero section-glow">
        <div className="container narrow stack">
          <p className="kicker">Portfolio</p>
          <h1 className="h1">A place for the moments, moods, and memories.</h1>
          <p className="lede">
            Add real event images here as your work grows. For now, this page gives you a polished structure to edit into a proper portfolio.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container portfolio-grid">
          {projects.map((project, index) => (
            <article className="portfolio-card" key={project.title}>
              <div className="portfolio-image">
                <span>0{index + 1}</span>
              </div>
              <div className="portfolio-content">
                <p className="mini-label">{project.type}</p>
                <h2>{project.title}</h2>
                <p>{project.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
